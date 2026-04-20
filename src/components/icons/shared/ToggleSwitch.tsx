interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
}

export function ToggleSwitch({ checked, onChange }: ToggleSwitchProps) {
  return (
    <div
      onClick={onChange}
      className={`w-8 h-4 rounded-full p-0.5 flex items-center transition-colors cursor-pointer ${
        checked ? "bg-[#E1E5F8]" : "bg-[#E9E9EF]"
      }`}
    >
      <div
        className={`w-3 h-3 rounded-full shadow-sm transition-transform duration-200 ${
          checked ? "bg-[#092083] translate-x-4" : "bg-[#A8B1CE] translate-x-0"
        }`}
      />
    </div>
  );
}
