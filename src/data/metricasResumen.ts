import type { DataResumenVentas } from "../types/resumen";

export const metricasResumenVentas: DataResumenVentas = {
  resumen: [
    { periodo: "Anual", porcentaje: "100%", monto: "S/4500" },
    { periodo: "Mensual", porcentaje: "60%", monto: "S/4500" },
    { periodo: "Semanal", porcentaje: "20%", monto: "S/4500" },
    { periodo: "Diario", porcentaje: "30%", monto: "S/4500" },
  ],
  distribucion: [
    { nombre: "Azul", valor: 45, color: "#5081C9" }, // Color aproximado de tu imagen
    { nombre: "Verde", valor: 35, color: "#2BBE78" },
    { nombre: "Oscuro", valor: 20, color: "#2F3644" },
  ],
};
