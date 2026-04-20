export function CabeceraTabla() {
  return (
    <div className="h-12.5 w-full border-b border-[#E9E9EF] flex items-center px-6 bg-[#FFFFFF] shrink-0">
      <div className="w-12 shrink-0" />
      <div className="w-full grid grid-cols-[35px_2fr_3.5fr_1.5fr_1.5fr_100px] gap-2.5 items-center">
        <span className="text-[#545A6D] font-inter font-bold text-[13px]">
          N°
        </span>
        <span className="text-[#545A6D] font-inter font-bold text-[13px] pl-1">
          Categoría
        </span>
        <span className="text-[#545A6D] font-inter font-bold text-[13px]">
          Descripción
        </span>
        <span className="text-[#545A6D] font-inter font-bold text-[13px]">
          Fecha
        </span>
        <span className="text-[#545A6D] font-inter font-bold text-[13px] pl-2">
          Categoría
        </span>
        <span className="text-[#545A6D] font-inter font-bold text-[13px] pl-1">
          Acciones
        </span>
      </div>
    </div>
  );
}
