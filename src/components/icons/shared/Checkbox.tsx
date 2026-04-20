interface CheckboxProps {
  checked?: boolean;
  onChange?: () => void;
}

export function Checkbox({ checked = false, onChange }: CheckboxProps) {
  return (
    <div
      onClick={onChange}
      className={`w-4 h-4 shrink-0 rounded-[3px] flex items-center justify-center border transition-colors cursor-pointer
        ${
          checked
            ? "bg-[#092083] border-[#092083]"
            : "bg-white border-[#D1D5DB] hover:border-[#092083]"
        }`}
    >
      {checked && (
        <svg
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 4L3.5 6.5L9 1"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}
