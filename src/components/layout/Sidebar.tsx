import { IconoMenu } from "../icons/layout/sidebar-items/IconoMenu";
import { IconoDashboard } from "../icons/layout/sidebar-items/IconoDashboard";
import { IconoProductos } from "../icons/layout/sidebar-items/IconoProductos";
import { IconoApps } from "../icons/layout/sidebar-items/IconoApps";
import { IconoWebs } from "../icons/layout/sidebar-items/IconoWebs";
import { IconoServidores } from "../icons/layout/sidebar-items/IconoServidores";
import { IconoTienda } from "../icons/layout/sidebar-items/IconoTienda";
import { IconoCentroAyuda } from "../icons/layout/sidebar-items/IconoCentroAyuda";
import LogoLvl from "../../assets/svg/logolvl.svg";
import { useLocation } from "react-router-dom";
import { SidebarItem } from "./SidebarItem";

interface SidebarProps {
  estaColapsado: boolean;
  onToggle: () => void;
}

export function Sidebar({ estaColapsado, onToggle }: SidebarProps) {
  const localizacion = useLocation();
  const esRutaActiva = (ruta: string) => localizacion.pathname === ruta;
  return (
    <div
      className={`bg-[#FAFCFF] rounded-tr-[20px] rounded-br-[20px] shrink-0 border-r border-[#E9E9EF] z-20 flex flex-col transition-all duration-300 ease-in-out ${estaColapsado ? "w-18" : "w-60"}`}
    >
      <div
        className={`w-full h-17.5 bg-[#FBFAFF] flex items-center transition-all duration-300 ease-in-out ${estaColapsado ? "justify-center px-0" : "justify-between pl-4.5 pr-5.5"}`}
      >
        <div
          className={`h-5 flex items-center overflow-hidden transition-all duration-300 ease-in-out ${estaColapsado ? "w-0 opacity-0" : "w-[113.6px] opacity-100"}`}
        >
          <img src={LogoLvl} alt="LogoLVL" />
        </div>
        <button
          onClick={onToggle}
          className="w-4 h-4 shrink-0 flex items-center justify-center text-[#545A6D] hover:text-[#092083] transition-colors cursor-pointer"
        >
          <IconoMenu />
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out flex items-start ${estaColapsado ? "h-0 opacity-0 mt-0" : "h-4.5 opacity-100 mt-3"}`}
      >
        <span className="w-9.5 ml-4.75 text-[#6D788B] font-normal text-[12px] leading-4.5 whitespace-nowrap">
          Menu
        </span>
      </div>

      <div
        className={`flex flex-col transition-all duration-300 ease-in-out ${estaColapsado ? "items-center mt-17 gap-6" : "items-stretch mt-2 gap-1"}`}
      >
        <SidebarItem
          texto="Dashboard"
          icono={<IconoDashboard />}
          ruta="/dashboard"
          activo={esRutaActiva("/dashboard")}
          mostrarFlecha={false}
          estaColapsado={estaColapsado}
        />
        <SidebarItem
          texto="Productos"
          icono={<IconoProductos />}
          ruta="/productos"
          activo={esRutaActiva("/productos")}
          estaColapsado={estaColapsado}
        />
        <SidebarItem
          texto="Apps"
          icono={<IconoApps />}
          ruta="/apps"
          activo={esRutaActiva("/apps")}
          estaColapsado={estaColapsado}
        />
        <SidebarItem
          texto="Páginas webs"
          icono={<IconoWebs />}
          ruta="/paginas-webs"
          subItems={[
            { texto: "Administrador", ruta: "/paginas-webs/administrador" },
            {
              texto: "Recursos humanos",
              ruta: "#",
            },
            {
              texto: "Estudios contables",
              ruta: "#",
            },
            { texto: "Logística", ruta: "#" },
          ]}
          estaColapsado={estaColapsado}
        />
        <SidebarItem
          texto="Servidores"
          icono={<IconoServidores />}
          ruta="/servidores"
          activo={esRutaActiva("/servidores")}
          estaColapsado={estaColapsado}
        />
        <SidebarItem
          texto="Tienda"
          icono={<IconoTienda />}
          ruta="/tienda"
          activo={esRutaActiva("/tienda")}
          estaColapsado={estaColapsado}
        />
        <SidebarItem
          texto="Centro de ayuda"
          icono={<IconoCentroAyuda />}
          ruta="/centro-ayuda"
          activo={esRutaActiva("/centro-ayuda")}
          estaColapsado={estaColapsado}
        />
      </div>
    </div>
  );
}
