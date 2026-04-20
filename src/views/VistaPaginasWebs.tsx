import { DashboardLayout } from "../layouts/DashboardLayout";
import { BarraControles } from "../components/views/paginasWebs/BarraControles";
import { CabeceraTabla } from "../components/views/paginasWebs/CabeceraTabla";
import { FilaPaginaWeb } from "../components/views/paginasWebs/FilaTabla";
import { mockPaginasWebs } from "../data/metricasPaginasWebs";
import { PaginacionTabla } from "../components/views/paginasWebs/PaginacionTabla";

export function VistaPaginasWebs() {
  return (
    <DashboardLayout>
      <div className="flex flex-col h-full w-full">
        <h1 className="shrink-0 text-[#092083] font-inter font-bold text-[14px] leading-4.5 mb-3">
          Páginas webs
        </h1>
        <BarraControles />
        <div className="flex-1 w-full bg-[#FFFFFF] rounded-lg border border-[#E9E9EF] overflow-hidden flex flex-col">
          <CabeceraTabla />
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {mockPaginasWebs.map((dato) => (
              <FilaPaginaWeb key={dato.id} dato={dato} />
            ))}
          </div>
        </div>
        <PaginacionTabla />
      </div>
    </DashboardLayout>
  );
}
