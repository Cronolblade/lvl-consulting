import { useState, useEffect } from "react";
import type { MetricaProgreso } from "../types/progreso";
import { metricasProgresoReferidos } from "../data/metricasProgreso";

export function useProgresoReferidos() {
  const [data, setData] = useState<MetricaProgreso[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const simularAPI = setTimeout(() => {
      setData(metricasProgresoReferidos);
      setCargando(false);
    }, 400);
    return () => clearTimeout(simularAPI);
  }, []);

  return { data, cargando };
}
