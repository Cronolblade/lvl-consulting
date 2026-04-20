import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { useMemo } from "react";
import { useResumenVentas } from "../../../hooks/useResumenVentas";
import { TarjetaBase } from "./TarjetaBase";

export function TarjetaResumenVentas() {
  const { data, cargando } = useResumenVentas();

  const distribucion = useMemo(() => {
    if (!data?.distribucion) return [];
    return data.distribucion.map((item) => ({
      ...item,
      fill: item.color,
    }));
  }, [data]);

  return (
    <TarjetaBase className="flex items-center px-6">
      {cargando || !data ? (
        <span className="text-[#8A94A6] text-[12px] w-full text-center">
          Cargando datos...
        </span>
      ) : (
        <div className="flex w-full items-center justify-between gap-6">
          <div className="w-27 h-27 shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={distribucion}
                  dataKey="valor"
                  cx="50%"
                  cy="50%"
                  innerRadius={32}
                  outerRadius={54}
                  stroke="none"
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-between flex-1 pl-4">
            {data.resumen.map((item, index) => (
              <div
                key={index}
                className="w-14 h-15.5 flex flex-col justify-center gap-1"
              >
                <span className="text-[#6D788B] font-inter font-normal text-[12px] leading-tight">
                  {item.periodo}
                </span>
                <span className="text-[#545A6D] font-inter font-bold text-[16px] leading-tight">
                  {item.porcentaje}
                </span>
                <span className="text-[#8A94A6] font-inter font-normal text-[11px] leading-tight">
                  {item.monto}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </TarjetaBase>
  );
}
