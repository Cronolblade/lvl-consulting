import { useState } from "react";
import { ToggleSwitch } from "../../../icons/shared/ToggleSwitch";
import { TablaConfiguracionCampos } from "./TablaConfigCampos";
import { IconoCerrar } from "../../../icons/shared/IconoCerrar";

interface ModalFormularioContactoProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalFormularioContacto({
  isOpen,
  onClose,
}: ModalFormularioContactoProps) {
  const [campos, setCampos] = useState([
    { id: 1, nombre: "Nombres y apellidos", mostrar: true, obligatorio: false },
    { id: 2, nombre: "Número de teléfono", mostrar: false, obligatorio: false },
    { id: 3, nombre: "Correo electrónico", mostrar: false, obligatorio: true },
    { id: 4, nombre: "Nombre de empresa", mostrar: true, obligatorio: true },
    { id: 5, nombre: "País", mostrar: true, obligatorio: true },
    { id: 6, nombre: "Mensaje", mostrar: true, obligatorio: true },
  ]);

  const [terminosActivos, setTerminosActivos] = useState(true);

  const toggleMostrar = (id: number) => {
    setCampos((prevCampos) =>
      prevCampos.map((campo) =>
        campo.id === id ? { ...campo, mostrar: !campo.mostrar } : campo,
      ),
    );
  };

  const toggleObligatorio = (id: number) => {
    setCampos((prevCampos) =>
      prevCampos.map((campo) =>
        campo.id === id ? { ...campo, obligatorio: !campo.obligatorio } : campo,
      ),
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#333333]/40">
      <div className="w-135.75 max-h-[90vh] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden border border-[#E8E8E8]">
        <div className="h-10.5 shrink-0 flex items-center justify-between px-4 border-b border-[#E9E9EF] bg-[#FAFCFF]">
          <h2 className="text-[#092083] font-inter font-bold text-[16px]">
            Formulario de contacto
          </h2>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded-md text-[#545A6D] hover:bg-[#E9E9EF] transition-colors cursor-pointer"
          >
            <IconoCerrar />
          </button>
        </div>
        <div className="p-4 overflow-y-auto custom-scrollbar flex flex-col gap-4">
          <div className="w-full flex flex-col gap-0.5">
            <label className="text-[#2F3644] font-inter text-[12px] font-medium">
              Nombre de formulario
            </label>
            <input
              type="text"
              placeholder="Introducir nombre del formulario"
              className="w-full h-8 px-3 rounded-md border border-[#E9E9EF] bg-white text-[#545A6D] text-[12px] font-inter placeholder:text-[#8A94A6] outline-none focus:border-[#092083] transition-colors"
            />
          </div>
          <TablaConfiguracionCampos
            campos={campos}
            onToggleMostrar={toggleMostrar}
            onToggleObligatorio={toggleObligatorio}
          />
          <div className="w-full flex flex-col gap-0.5">
            <label className="text-[#545A6D] font-inter text-[12px] font-medium">
              Mensaje de agradecimiento
            </label>
            <input
              type="text"
              placeholder="¡Gracias!"
              className="w-full h-8 px-3 rounded-md border border-[#E9E9EF] bg-white text-[#545A6D] text-[12px] font-inter placeholder:text-[#8A94A6] outline-none focus:border-[#092083] transition-colors"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="text-[#2F3644] font-inter text-[12px] font-medium">
                Términos y condiciones personalizados
              </label>
              <ToggleSwitch
                checked={terminosActivos}
                onChange={() => setTerminosActivos(!terminosActivos)}
              />
            </div>
            <div className="w-full h-8 flex items-center rounded-md border border-[#E8E8E8] bg-[#F9F9F9] overflow-hidden">
              <span className="pl-3 pr-1 text-[#2F3644] font-inter text-[12px] font-bold">
                https://
              </span>
              <input
                type="text"
                placeholder="Añadir enlace"
                className="flex-1 h-full bg-transparent text-[#545A6D] text-[12px] font-inter placeholder:text-[#8A94A6] outline-none"
              />
            </div>
          </div>
          <div className="flex justify-center mt-2 mb-2">
            <button className="w-45.5 h-8 flex items-center justify-center bg-[#092083] text-white rounded-lg font-inter text-[12px] font-medium hover:bg-[#071a6a] transition-colors cursor-pointer shadow-sm">
              Crear formulario
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
