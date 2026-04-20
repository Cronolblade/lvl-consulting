import { IconoGuardar } from "../../icons/views/administrador/IconoGuardar";

interface CabeceraFormularioProps {
  onAbrirModal: () => void;
}

export function CabeceraFormulario({ onAbrirModal }: CabeceraFormularioProps) {
  return (
    <div className="shrink-0 flex justify-between items-start w-full mb-3">
      <div className="flex flex-col gap-1">
        <h1 className="text-[#092083] font-inter font-bold text-[14px] leading-4.5">
          Nuevo formulario
        </h1>
        <p className="text-[#545A6D] font-inter font-medium text-[12px] leading-4.5">
          Complete sus datos y continúe con los siguientes pasos.
        </p>
      </div>
      <button
        onClick={onAbrirModal}
        className="w-38.5 h-8 flex items-center justify-center gap-2 rounded-lg bg-[#092083] border border-[#092083] hover:bg-[#071a6a] transition-colors cursor-pointer shadow-sm text-white"
      >
        <IconoGuardar />
        <span className="font-inter text-[12px] font-medium leading-3.5">
          Guardar
        </span>
      </button>
    </div>
  );
}
