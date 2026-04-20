import type { ReactNode } from "react";

interface TarjetaBaseProps {
  children: ReactNode;
  className?: string;
}

export function TarjetaBase({ children, className = "" }: TarjetaBaseProps) {
  return (
    <div
      className={`h-full w-full rounded-lg border border-[#E9E9EF] bg-[#FFFFFF] ${className}`}
    >
      {children}
    </div>
  );
}
