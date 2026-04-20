export interface MetricaDashboard {
  id: string;
  titulo: string;
  monto: string | number;
  tendenciaValor: string;
  tendenciaTexto: string;
  esPositiva: boolean;
}
