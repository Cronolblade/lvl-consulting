import { TarjetaBase } from "./TarjetaBase";

interface TarjetaMetricaProps {
  titulo: string;
  monto: string | number;
  tendenciaValor: string;
  tendenciaTexto: string;
  esPositiva: boolean;
}

export function TarjetaMetrica({
  titulo,
  monto,
  tendenciaValor,
  tendenciaTexto,
  esPositiva,
}: TarjetaMetricaProps) {
  const colorFondoPill = esPositiva ? "bg-[#D1F7E3]" : "bg-[#FFE2E5]";
  const colorTextoPill = esPositiva ? "text-[#00A355]" : "text-[#F63D68]";

  return (
    <TarjetaBase className="min-h-23 flex flex-col pt-3 px-4.5 pb-3">
      <div className=" h-16.5 flex flex-col gap-1">
        <span className="text-[#545A6D] font-inter font-normal text-[12px] leading-4.5 truncate">
          {titulo}
        </span>
        <span className="text-[#545A6D] font-inter font-bold text-[14px] leading-4.5 truncate">
          {monto}
        </span>
        <div className=" h-5.5 flex items-center gap-2 mt-auto">
          <span
            className={`${colorFondoPill} ${colorTextoPill} font-inter font-medium text-[11px] px-1.5 py-0.5 rounded-sm whitespace-nowrap`}
          >
            {tendenciaValor}
          </span>
          <span className="text-[#8A94A6] font-inter font-normal text-[11px] truncate">
            {tendenciaTexto}
          </span>
        </div>
      </div>
    </TarjetaBase>
  );
}
