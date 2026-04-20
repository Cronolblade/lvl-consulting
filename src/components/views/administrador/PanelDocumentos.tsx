import { IconoSubirDocumento } from "../../icons/views/administrador/IconoSubirDocumento";

export function PanelDocumentos() {
  return (
    <div className="flex-1 h-full rounded-lg border border-[#E9E9EF] bg-[#FAFCFF] overflow-y-auto p-6 flex flex-col custom-scrollbar">
      <h2 className="text-[#545A6D] font-inter text-[13px] mb-4">Documentos</h2>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-46.5 flex flex-col items-center gap-1.5 text-center">
          <div className="w-8 h-8 flex items-center justify-center text-[#4C84FF] opacity-40 mb-1">
            <IconoSubirDocumento />
          </div>
          <button className="w-full h-8 bg-[#092083] text-white rounded-lg font-inter text-[12px] font-medium hover:bg-[#071a6a] transition-colors cursor-pointer shadow-sm">
            Seleccionar archivos
          </button>
          <p className="text-[#8A94A6] font-inter text-[11px] leading-3.5">
            o arrastra y suelta los PDF aquí
          </p>
        </div>
      </div>
    </div>
  );
}
