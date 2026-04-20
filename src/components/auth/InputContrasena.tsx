import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PropsContrasena {
  label?: string;
  placeholder?: string;
  valor: string;
  alCambiar: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputContrasena({
  label = "Contraseña",
  placeholder = "Introducir la contraseña",
  valor,
  alCambiar,
}: PropsContrasena) {
  const [mostrarContrasena, fijarMostrarContrasena] = useState(false);

  const alternarVisibilidad = () => {
    fijarMostrarContrasena(!mostrarContrasena);
  };

  return (
    <div className="flex flex-col w-full h-13.5 gap-2">
      <label className="w-full h-3.5 font-inter font-medium text-[12px] leading-4.5 text-gray-700">
        {label}
      </label>
      <div className="relative w-full h-8">
        <input
          type={mostrarContrasena ? "text" : "password"}
          placeholder={placeholder}
          value={valor}
          onChange={alCambiar}
          className="w-full h-full rounded-sm border border-[#E9E9EF] pl-3 pr-9 font-inter text-[12px] text-gray-800 focus:outline-none focus:border-[#092083] transition-colors"
        />
        <button
          type="button"
          onClick={alternarVisibilidad}
          className="absolute top-2 left-73.5 w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center focus:outline-none"
        >
          {mostrarContrasena ? <Eye size={16} /> : <EyeOff size={16} />}
        </button>
      </div>
    </div>
  );
}
