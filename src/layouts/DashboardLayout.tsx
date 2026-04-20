import { useState, type ReactNode } from "react";
import { Sidebar } from "../components/layout/Sidebar";
import { Header } from "../components/layout/Header";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [estaColapsado, setEstaColapsado] = useState(false);
  const alternarSidebar = () => {
    setEstaColapsado(!estaColapsado);
  };

  return (
    <div className="w-full h-screen overflow-hidden bg-[#FFFFFF] flex font-inter">
      <Sidebar estaColapsado={estaColapsado} onToggle={alternarSidebar} />
      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out">
        <Header />
        <main className="flex-1 p-4.5 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
