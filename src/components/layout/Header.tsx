import { IconoCuadricula } from "../icons/layout/header/IconoCuadricula";
import { IconoNotificacion } from "../icons/layout/header/IconoNotificacion";
import { IconoAjuste } from "../icons/layout/header/IconoAjuste";
import { IconoFlechaMini } from "../icons/shared/IconoFlechaMini";
import BanderaEspana from "../../assets/svg/bandera-espana.svg";

export function Header() {
  const fechaNativa = new Date().toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const fechaFormateada =
    fechaNativa.charAt(0).toUpperCase() + fechaNativa.slice(1);

  return (
    <header className="w-full h-17.5 shrink-0 bg-[#FFFFFF] border-b border-[#E9E9EF] flex items-center justify-between pl-4.5">
      <div className="w-54.75 h-9 flex flex-col justify-center gap-1">
        <h2 className="text-[#545A6D] font-inter font-medium text-[14px] leading-4.5">
          ¡Te damos la bienvenida Miguel!
        </h2>
        <span className="text-[#545A6D] font-inter font-normal text-[12px] leading-4.5">
          {fechaFormateada}
        </span>
      </div>
      <div className="flex items-center gap-6">
        <div className="w-48.75 h-4.5 flex items-center justify-between">
          <div className="w-24.75 flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity">
            <img
              src={BanderaEspana}
              alt="Bandera España"
              className="w-5.5 h-4 shadow-sm"
            />
            <span className="text-[#545A6D] font-inter font-medium text-[12px] leading-none">
              Español
            </span>
            <IconoFlechaMini color="#545A6D" />
          </div>
          <div className="flex items-center gap-4">
            <button className="w-4 h-4 flex items-center justify-center text-[#545A6D] hover:text-[#092083] transition-colors">
              <IconoCuadricula color="currentColor" />
            </button>
            <button className="w-4 h-4 flex items-center justify-center text-[#545A6D] hover:text-[#092083] transition-colors">
              <IconoNotificacion color="currentColor" />
            </button>
            <button className="w-4 h-4 flex items-center justify-center text-[#545A6D] hover:text-[#092083] transition-colors">
              <IconoAjuste color="currentColor" />
            </button>
          </div>
        </div>
        <div className="w-62.75 h-17.5 bg-[#FAFCFF] border-l border-[#E9E9EF] flex items-center px-5.5 gap-3 cursor-pointer hover:bg-[#f3f7fd] transition-colors">
          <div className="w-50.75 h-8.25 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-[#E3E8EF] shrink-0">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Miguel"
                alt="Miguel Liberato"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-39.75 h-8.25 flex items-center gap-1">
              <div className="w-34.75 flex flex-col justify-center gap-1 min-w-0">
                <span className="text-[#545A6D] font-inter font-medium text-[14px] leading-tight truncate">
                  Miguel Liberato
                </span>
                <span className="text-[#545A6D] font-inter font-normal text-[12px] leading-tight truncate">
                  CEO LVL Consulting
                </span>
              </div>
              <div className="shrink-0">
                <IconoFlechaMini color="#1C1B1F" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
