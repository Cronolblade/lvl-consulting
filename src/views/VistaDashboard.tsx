import { DashboardLayout } from "../layouts/DashboardLayout";
import { TarjetaMetrica } from "../components/views/dashboard/TarjetaMetrica";
import { GraficoAlmacenamiento } from "../components/views/dashboard/GraficoAlmacenamiento";
import { useMetricas } from "../hooks/useMetricas";
import { TarjetaResumenVentas } from "../components/views/dashboard/TarjetaResumenVentas";
import { TarjetaProgreso } from "../components/views/dashboard/TarjetaProgreso";

export function VistaDashboard() {
  const { data: metricas, cargando } = useMetricas();

  return (
    <DashboardLayout>
      <div className="flex flex-col h-full w-full min-h-0">
        <div className="shrink-0 mb-4 flex items-center">
          <h1 className="text-[#092083] font-bold text-[14px] leading-4.5">
            Dashboard
          </h1>
        </div>
        {cargando ? (
          <p className="text-[#545A6D]">Cargando métricas...</p>
        ) : (
          <div className="grid grid-cols-4 gap-4.25 shrink-0">
            {metricas.map((metrica) => (
              <TarjetaMetrica
                key={metrica.id}
                titulo={metrica.titulo}
                monto={metrica.monto}
                tendenciaValor={metrica.tendenciaValor}
                tendenciaTexto={metrica.tendenciaTexto}
                esPositiva={metrica.esPositiva}
              />
            ))}
          </div>
        )}
        <h2 className="shrink-0 text-[#092083] font-inter font-bold text-[14px] leading-4.5 mt-4 mb-3">
          Historial de ventas
        </h2>

        <GraficoAlmacenamiento />

        <div className="grid grid-cols-2 gap-4.25 shrink-0 mt-4 mb-3">
          <h2 className="text-[#092083] font-bold text-[14px] leading-4.5">
            Historial de ventas
          </h2>
          <h2 className="text-[#092083] font-bold text-[14px] leading-4.5">
            Historial de ventas
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4.25 shrink-0 h-42.25">
          <TarjetaResumenVentas />
          <TarjetaProgreso />
        </div>
      </div>
    </DashboardLayout>
  );
}
