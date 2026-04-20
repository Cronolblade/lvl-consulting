export interface DataResumenVentas {
  resumen: ResumenPeriodo[];
  distribucion: DistribucionGrafico[];
}

export interface ResumenPeriodo {
  periodo: string;
  porcentaje: string;
  monto: string;
}

export interface DistribucionGrafico {
  nombre: string;
  valor: number;
  color: string;
}
