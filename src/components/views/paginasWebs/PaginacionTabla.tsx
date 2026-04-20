import { IconoFlechaIzquierda } from "../../icons/views/paginasWebs/IconoFlechaIzquierda";
import { IconoFlechaDerecha } from "../../icons/views/paginasWebs/IconoFlechaDerecha";

export function PaginacionTabla() {
  return (
    <div className="shrink-0 flex justify-between items-center px-1.5 py-4 border-t border-[#E9E9EF] mt-auto">
      <span className="text-[#545A6D] font-inter text-[12px] font-medium">
        Mostrando 1 a 10 de 19 datos
      </span>

      <div className="flex items-center gap-6">
        <span className="text-[#545A6D] font-inter text-[12px] font-medium">
          1 de 2 páginas
        </span>

        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center w-8 h-8 rounded-md text-[#8A94A6] hover:bg-[#F5F9FA] transition-colors cursor-pointer">
            <IconoFlechaIzquierda />
          </button>
          <button className="flex items-center justify-center w-8 h-8 rounded-md bg-[#E6EFFB] text-[#092083] font-inter text-[12px] font-bold transition-colors cursor-pointer">
            1
          </button>
          <button className="flex items-center justify-center w-8 h-8 rounded-md text-[#545A6D] font-inter text-[12px] font-medium hover:bg-[#F5F9FA] transition-colors cursor-pointer">
            2
          </button>
          <button className="flex items-center justify-center w-8 h-8 rounded-md text-[#8A94A6] hover:bg-[#F5F9FA] transition-colors cursor-pointer">
            <IconoFlechaDerecha />
          </button>
        </div>
      </div>
    </div>
  );
}
