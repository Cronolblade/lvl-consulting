import { IconoFlechaAbajo } from "../../icons/views/administrador/IconoFlechaAbajo";

export function PanelFormulario() {
  return (
    <div className="flex-1 h-full rounded-lg border border-[#E9E9EF] bg-white p-6">
      <div className="flex flex-col gap-4.5 w-full">
        <div className="flex items-center gap-4.5 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-[#545A6D] font-inter text-[12px] font-medium">
              Nombre de categoría<span className="text-[#F63D68]">*</span>
            </label>
            <input
              type="text"
              placeholder="Introducir la categoría"
              className="w-full h-9 px-3 rounded-md border border-[#E9E9EF] bg-white text-[#545A6D] text-[12px] font-inter placeholder:text-[#8A94A6] outline-none focus:border-[#092083] transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-[#545A6D] font-inter text-[12px] font-medium">
              Nombre de categoría<span className="text-[#F63D68]">*</span>
            </label>
            <input
              type="text"
              placeholder="Introducir la categoría"
              className="w-full h-9 px-3 rounded-md border border-[#E9E9EF] bg-white text-[#545A6D] text-[12px] font-inter placeholder:text-[#8A94A6] outline-none focus:border-[#092083] transition-colors"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[#545A6D] font-inter text-[12px] font-medium">
            Empresa<span className="text-[#F63D68]">*</span>
          </label>
          <div className="relative w-full h-9">
            <select className="w-full h-full px-3 rounded-md border border-[#E9E9EF] bg-white text-[#8A94A6] text-[12px] font-inter appearance-none outline-none focus:border-[#092083] transition-colors cursor-pointer">
              <option value="" disabled selected hidden>
                Seleccionar una empresa
              </option>
              <option value="1">Empresa 1</option>
              <option value="2">Empresa 2</option>
            </select>
            <div className="absolute right-3 top-0 bottom-0 flex items-center pointer-events-none text-[#8A94A6]">
              <IconoFlechaAbajo />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[#545A6D] font-inter text-[12px] font-medium">
            Tipo de empresa
          </label>
          <div className="relative w-full h-9">
            <select className="w-full h-full px-3 rounded-md border border-[#E9E9EF] bg-white text-[#8A94A6] text-[12px] font-inter appearance-none outline-none focus:border-[#092083] transition-colors cursor-pointer">
              <option value="" disabled selected hidden>
                Seleccionar tipo de empresa
              </option>
              <option value="1">Tipo 1</option>
            </select>
            <div className="absolute right-3 top-0 bottom-0 flex items-center pointer-events-none text-[#8A94A6]">
              <IconoFlechaAbajo />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[#545A6D] font-inter text-[12px] font-medium">
            Tipo de empresa
          </label>
          <div className="relative w-full h-9">
            <select className="w-full h-full px-3 rounded-md border border-[#E9E9EF] bg-white text-[#8A94A6] text-[12px] font-inter appearance-none outline-none focus:border-[#092083] transition-colors cursor-pointer">
              <option value="" disabled selected hidden>
                Seleccionar tipo de empresa
              </option>
              <option value="1">Tipo 1</option>
            </select>
            <div className="absolute right-3 top-0 bottom-0 flex items-center pointer-events-none text-[#8A94A6]">
              <IconoFlechaAbajo />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[#545A6D] font-inter text-[12px] font-medium">
            Descripción
          </label>
          <textarea
            placeholder="Escribe una descripción para la categoría"
            className="w-full h-40 p-3 rounded-md border border-[#E9E9EF] bg-white text-[#545A6D] text-[12px] font-inter placeholder:text-[#8A94A6] outline-none focus:border-[#092083] transition-colors resize-none"
          />
        </div>
      </div>
    </div>
  );
}
