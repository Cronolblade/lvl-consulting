import { useProgresoReferidos } from "../../../hooks/useProgresoReferidos";
import { BarraProgreso } from "./BarraProgreso";
import { TarjetaBase } from "./TarjetaBase";

export function TarjetaProgreso() {
  const { data, cargando } = useProgresoReferidos();

  return (
    <TarjetaBase className="pt-6.75 pl-4.5 overflow-hidden">
      {cargando ? (
        <span className="text-[#8A94A6] text-[12px]">
          Cargando referidos...
        </span>
      ) : (
        <div className="flex flex-col gap-6">
          {data.map((item) => (
            <BarraProgreso
              key={item.id}
              valor={item.valor}
              etiqueta={item.etiqueta}
              porcentaje={item.porcentaje}
              color={item.color}
            />
          ))}
        </div>
      )}
    </TarjetaBase>
  );
}
