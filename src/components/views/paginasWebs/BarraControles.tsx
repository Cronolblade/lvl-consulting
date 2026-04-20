import { IconoFlechaMini } from "../../icons/shared/IconoFlechaMini";
import { IconoFiltro } from "../../icons/views/paginasWebs/IconoFiltro";
import { IconoAgregar } from "../../icons/views/paginasWebs/IconoAgregar";

export function BarraControles() {
  return (
    <div className="shrink-0 flex justify-between items-center w-full mb-4">
      <div className="flex items-center gap-3 h-8">
        <div className="flex items-center justify-between px-3 border border-[#E9E9EF] rounded-md bg-white w-16 h-full cursor-pointer hover:border-[#cfcfd6] transition-colors">
          <span className="text-[#545A6D] text-[12px] font-medium">10</span>
          <IconoFlechaMini />
        </div>
        <span className="text-[#545A6D] font-inter text-[12px] font-medium whitespace-nowrap">
          Datos por página
        </span>
      </div>
      <div className="flex items-center gap-3">
        <button className="w-22.5 h-8 flex items-center justify-center gap-2 rounded-lg border border-[#E9E9EF] bg-[#FFFFFF] hover:bg-[#F5F9FA] transition-colors cursor-pointer">
          <IconoFiltro />
          <span className="text-[#545A6D] font-inter text-[12px] font-medium">
            Filtrar
          </span>
        </button>
        <button className="w-38.25 h-8 flex items-center justify-center gap-2 rounded-lg bg-[#092083] border border-[#092083] hover:bg-[#071a6a] transition-colors cursor-pointer shadow-sm">
          <IconoAgregar />
          <span className="text-[#FFFFFF] font-inter text-[12px] font-medium">
            Agregar categoría
          </span>
        </button>
      </div>
    </div>
  );
}
