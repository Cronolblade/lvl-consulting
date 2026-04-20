import type { DatoPaginaWeb } from "../../../types/paginasWebs";
import { Checkbox } from "../../icons/shared/Checkbox";
import { IconoEditar } from "../../icons/views/paginasWebs/IconoEditar";
import { IconoVer } from "../../icons/views/paginasWebs/IconoVer";
import { IconoEliminar } from "../../icons/views/paginasWebs/IconoEliminar";

interface FilaPaginaWebProps {
  dato: DatoPaginaWeb;
}

export function FilaPaginaWeb({ dato }: FilaPaginaWebProps) {
  const obtenerEstilosEtiqueta = (tipo: string) => {
    switch (tipo) {
      case "Imágenes":
        return "bg-[#FFF5E6] text-[#FF9800]";
      case "Documento":
        return "bg-[#E6F8F3] text-[#20C997]";
      case "Videos":
        return "bg-[#EBF3FF] text-[#4C84FF]";
      default:
        return "bg-[#E9E9EF] text-[#545A6D]";
    }
  };

  return (
    <div className="flex items-center px-6 py-4 border-b border-[#E9E9EF] hover:bg-[#FAFCFF] transition-colors">
      <div className="w-12 shrink-0 flex items-center">
        <Checkbox />
      </div>
      <div className="w-full grid grid-cols-[35px_2fr_3.5fr_1.5fr_1.5fr_100px] gap-4 items-center">
        <span className="text-[#545A6D] font-inter text-[13px]">
          {dato.numero}
        </span>
        <div className="flex items-center gap-3 overflow-hidden">
          <img
            src={dato.imagenUrl}
            alt="miniatura"
            className="w-10 h-10 rounded-md object-cover shrink-0"
          />
          <div className="flex flex-col truncate">
            <span className="text-[#2F3644] font-inter font-bold text-[13px] truncate">
              {dato.categoriaPrincipal}
            </span>
            <span className="text-[#8A94A6] font-inter text-[12px] truncate">
              {dato.categoriaSub}
            </span>
          </div>
        </div>
        <div className="flex flex-col truncate pr-4">
          <span className="text-[#545A6D] font-inter text-[13px] truncate">
            {dato.descripcionPrincipal}
          </span>
          <span className="text-[#8A94A6] font-inter text-[12px] truncate">
            {dato.descripcionSub}
          </span>
        </div>
        <span className="text-[#545A6D] font-inter text-[13px] whitespace-nowrap pl-2.5">
          {dato.fecha}
        </span>
        <div className="pl-4.5 w-27.5 flex justify-center">
          <span
            className={`flex items-center justify-center w-full font-inter font-bold text-[11px] px-3 py-1.5 rounded-md whitespace-nowrap ${obtenerEstilosEtiqueta(dato.tipo)}`}
          >
            {dato.tipo}
          </span>
        </div>
        <div className="flex items-center justify-center gap-3 text-[#8A94A6]">
          <button className="w-3.5 h-3.5 text-[#545A6D] hover:text-[#092083] transition-colors cursor-pointer flex items-center justify-center">
            <IconoEditar />
          </button>
          <button className="w-4.5 h-4.5 text-[#545A6D] hover:text-[#092083] transition-colors cursor-pointer flex items-center justify-center">
            <IconoVer />
          </button>
          <button className="w-3.5 h-3.5 text-[#545A6D] hover:text-[#F63D68] transition-colors cursor-pointer flex items-center justify-center">
            <IconoEliminar />
          </button>
        </div>
      </div>
    </div>
  );
}
