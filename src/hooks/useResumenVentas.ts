import { useState, useEffect } from "react";
import type { DataResumenVentas } from "../types/resumen";
import { metricasResumenVentas } from "../data/metricasResumen";

export function useResumenVentas() {
  const [data, setData] = useState<DataResumenVentas | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const simularAPI = setTimeout(() => {
      setData(metricasResumenVentas);
      setCargando(false);
    }, 500);
    return () => clearTimeout(simularAPI);
  }, []);

  return { data, cargando };
}
