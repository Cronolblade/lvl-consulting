import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { IconoFlecha } from "../icons/layout/sidebar-items/IconoFlecha";

export interface SubItem {
  texto: string;
  ruta: string;
}

interface SidebarItemProps {
  texto: string;
  icono: ReactNode;
  ruta: string;
  activo?: boolean;
  mostrarFlecha?: boolean;
  estaColapsado?: boolean;
  subItems?: SubItem[];
}

export function SidebarItem({
  texto,
  icono,
  ruta,
  activo = false,
  mostrarFlecha = true,
  estaColapsado = false,
  subItems = [],
}: SidebarItemProps) {
  const localizacion = useLocation();
  const tieneSubItems = subItems.length > 0;

  const algunHijoActivo = subItems.some(
    (sub) => localizacion.pathname === sub.ruta,
  );
  const esRutaPrincipalActiva = localizacion.pathname === ruta;
  const padreActivo = activo || esRutaPrincipalActiva || algunHijoActivo;

  const [expandido, setExpandido] = useState(algunHijoActivo);
  const [prevHijoActivo, setPrevHijoActivo] = useState(algunHijoActivo);
  if (algunHijoActivo !== prevHijoActivo) {
    setPrevHijoActivo(algunHijoActivo);
    setExpandido(algunHijoActivo);
  }

  const colorFondo =
    padreActivo && !algunHijoActivo
      ? "bg-[#E6EFFB]"
      : "hover:opacity-70 bg-transparent";

  const colorTexto = padreActivo
    ? "text-[#092083] font-semibold"
    : "text-[#545A6D] font-medium";

  const manejarClicFlecha = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandido(!expandido);
  };

  return (
    <div className="flex flex-col w-full">
      <div
        className={`h-9.5 rounded-lg flex items-center transition-all duration-300 ease-in-out ${colorFondo}
        ${estaColapsado ? "w-9 mx-auto justify-center px-0" : "w-51 mx-4.5 justify-between"}`}
      >
        <Link
          to={ruta}
          className={`flex items-center h-full flex-1 transition-all duration-300
          ${estaColapsado ? "justify-center" : "pl-2.5 gap-3"}`}
        >
          <div className="w-4 h-4 shrink-0 flex items-center justify-center">
            {icono}
          </div>
          <span
            className={`font-inter text-[12px] leading-4.5 whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${colorTexto}
            ${estaColapsado ? "max-w-0 opacity-0 hidden" : "max-w-37.5 opacity-100"}`}
          >
            {texto}
          </span>
        </Link>
        {mostrarFlecha && (
          <div
            onClick={tieneSubItems ? manejarClicFlecha : undefined}
            className={`shrink-0 flex items-center justify-center h-full transition-all duration-300 ease-in-out
            ${tieneSubItems ? "cursor-pointer hover:bg-[#09208315] w-8 rounded-r-lg" : "w-6 pr-2.5 pointer-events-none"}
            ${estaColapsado ? "max-w-0 opacity-0 hidden" : "opacity-100"}`}
          >
            <div
              className={`transition-transform duration-300 flex items-center justify-center ${expandido ? "rotate-90" : "rotate-0"}`}
            >
              <IconoFlecha color={padreActivo ? "#092083" : "#545A6D"} />
            </div>
          </div>
        )}
      </div>
      {expandido && tieneSubItems && !estaColapsado && (
        <div className="flex flex-col mt-1 mb-2 gap-1 overflow-hidden transition-all duration-300">
          {subItems.map((sub, index) => {
            const esSubActivo = localizacion.pathname === sub.ruta;
            return (
              <Link
                key={index}
                to={sub.ruta}
                className={`h-9.5 flex items-center rounded-lg mx-4.5 pl-10 pr-2.5 transition-all duration-300 ease-in-out
                  ${esSubActivo ? "bg-[#E6EFFB] text-[#092083] font-semibold" : "text-[#545A6D] font-medium hover:opacity-70 bg-transparent"}
                `}
              >
                <span className="font-inter text-[12px] leading-4.5 whitespace-nowrap">
                  {sub.texto}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
