import { useState, useEffect } from "react";
import type { MetricaDashboard } from "../types/dashboard";
import { metricasDashboard } from "../data/metricasDashboard";

export function useMetricas() {
  const [data, setData] = useState<MetricaDashboard[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const simularAPI = setTimeout(() => {
      setData(metricasDashboard);
      setCargando(false);
    }, 500);
    return () => clearTimeout(simularAPI);
  }, []);

  return { data, cargando };
}
