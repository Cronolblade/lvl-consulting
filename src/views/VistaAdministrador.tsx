import { useState } from "react";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { CabeceraFormulario } from "../components/views/administrador/CabeceraFormulario";
import { PanelFormulario } from "../components/views/administrador/PanelFormulario";
import { PanelDocumentos } from "../components/views/administrador/PanelDocumentos";
import { ModalFormularioContacto } from "../components/views/administrador/modales/ModalFormularioContacto";

export function VistaAdministrador() {
  const [modalAbierto, setModalAbierto] = useState(false);
  return (
    <DashboardLayout>
      <div className="flex flex-col h-full w-full min-h-0">
        <CabeceraFormulario onAbrirModal={() => setModalAbierto(true)} />
        <div className="flex-1 flex gap-6 overflow-hidden">
          <PanelFormulario />
          <PanelDocumentos />
        </div>
      </div>
      <ModalFormularioContacto
        isOpen={modalAbierto}
        onClose={() => setModalAbierto(false)}
      />
    </DashboardLayout>
  );
}
