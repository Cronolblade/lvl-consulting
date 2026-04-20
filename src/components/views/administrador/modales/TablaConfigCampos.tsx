import { Checkbox } from "../../../icons/shared/Checkbox";
import { ToggleSwitch } from "../../../icons/shared/ToggleSwitch";

export interface CampoConfiguracion {
  id: number;
  nombre: string;
  mostrar: boolean;
  obligatorio: boolean;
}

interface TablaConfiguracionCamposProps {
  campos: CampoConfiguracion[];
  onToggleMostrar: (id: number) => void;
  onToggleObligatorio: (id: number) => void;
}

export function TablaConfiguracionCampos({
  campos,
  onToggleMostrar,
  onToggleObligatorio,
}: TablaConfiguracionCamposProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-1 mb-4">
        <h3 className="text-[#2F3644] font-inter text-[12px] font-bold">
          Administrador
        </h3>
        <p className="text-[#8A94A6] font-inter text-[12px] leading-3.5">
          Seleccione los campos que desea incluir en el formulario de contacto.
        </p>
      </div>
      <div className="flex items-center mb-3 px-1">
        <span className="flex-1 text-[#545A6D] font-inter text-[12px] font-medium">
          Campo
        </span>
        <span className="w-23 text-start text-[#545A6D] font-inter text-[12px] font-medium">
          Mostrar
        </span>
        <span className="w-20 text-center text-[#545A6D] font-inter text-[12px] font-medium">
          Obligatorio
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {campos.map((campo) => (
          <div key={campo.id} className="flex items-center px-1">
            <span className="flex-1 text-[#545A6D] font-inter text-[12px]">
              {campo.nombre}
            </span>
            <div className="w-23 flex justify-start pl-1">
              <Checkbox
                checked={campo.mostrar}
                onChange={() => onToggleMostrar(campo.id)}
              />
            </div>
            <div className="w-20 flex justify-center">
              <ToggleSwitch
                checked={campo.obligatorio}
                onChange={() => onToggleObligatorio(campo.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
