import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { VistaRegistro } from "./views/VistaRegistro";
import { VistaDashboard } from "./views/VistaDashboard";
import { VistaPaginasWebs } from "./views/VistaPaginasWebs";
import { VistaAdministrador } from "./views/VistaAdministrador";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/registro" replace />}></Route>
        <Route path="/registro" element={<VistaRegistro />} />
        <Route path="/dashboard" element={<VistaDashboard />} />
        <Route path="/paginas-webs" element={<VistaPaginasWebs />} />
        <Route
          path="/paginas-webs/administrador"
          element={<VistaAdministrador />}
        />
      </Routes>
    </BrowserRouter>
  );
}
