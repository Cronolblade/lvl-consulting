interface BarraProgresoProps {
  valor: string | number;
  etiqueta: string;
  porcentaje: number;
  color: string;
}

export function BarraProgreso({
  valor,
  etiqueta,
  porcentaje,
  color,
}: BarraProgresoProps) {
  return (
    <div className="w-114.25 h-11 flex flex-col justify-between">
      <div className="flex justify-between items-end w-full">
        <div className="flex flex-col">
          <span className="text-[#2F3644] font-inter font-bold text-[16px] leading-none mb-1">
            {valor}
          </span>
          <span className="text-[#6D788B] font-inter font-normal text-[12px] leading-none">
            {etiqueta}
          </span>
        </div>

        <span className="text-[#6D788B] font-inter font-normal text-[12px] leading-none mb-1">
          {porcentaje}%
        </span>
      </div>

      <div className="w-full h-1.5 bg-[#F5F9FA] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-in-out"
          style={{ width: `${porcentaje}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}
