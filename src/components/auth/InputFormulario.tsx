interface PropsInput {
  label: string;
  tipo: "text" | "email";
  placeholder: string;
  esObligatorio?: boolean;
  valor: string;
  alCmabiar: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputFormulario({
  label,
  tipo,
  placeholder,
  esObligatorio = false,
  valor,
  alCmabiar,
}: PropsInput) {
  return (
    <div className="flex flex-col w-full h-13.5 gap-2">
      <label className="w-full h-3.5 font-inter font-medium text-[12px] leading-4.5 text-gray-700">
        {label}
        {esObligatorio && <span className="text-red-500">*</span>}
      </label>
      <input
        type={tipo}
        placeholder={placeholder}
        value={valor}
        onChange={alCmabiar}
        className="w-full h-8 rounded-sm border border-[#E9E9EF] px-3 font-inter text-[12px] text-gray-800 focus:outline-none focus:border-[#092083] transition-colors"
      />
    </div>
  );
}
