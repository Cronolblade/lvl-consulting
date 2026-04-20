import type { MetricaDashboard } from "../types/dashboard";

export const metricasDashboard: MetricaDashboard[] = [
  {
    id: "m1",
    titulo: "Ingresos",
    monto: "S/ 460.00",
    tendenciaValor: "+ S/50k",
    tendenciaTexto: "Desde el mes pasado",
    esPositiva: true,
  },
  {
    id: "m2",
    titulo: "Número de clientes",
    monto: "4789",
    tendenciaValor: "-30 clientes",
    tendenciaTexto: "Desde el mes pasado",
    esPositiva: false,
  },
  {
    id: "m3",
    titulo: "Inversión realizada",
    monto: "S/ 5460.00k",
    tendenciaValor: "+ S/32k",
    tendenciaTexto: "Desde el mes pasado",
    esPositiva: true,
  },
  {
    id: "m4",
    titulo: "Relación de ganancia",
    monto: "S/ 460.00",
    tendenciaValor: "- S/50k",
    tendenciaTexto: "Desde el mes pasado",
    esPositiva: false,
  },
];
