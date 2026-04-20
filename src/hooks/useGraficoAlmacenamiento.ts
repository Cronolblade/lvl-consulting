import { useState, useEffect } from "react";
import type { DatosAlmacenamiento } from "../types/grafico";
import { dataAlmacenamiento } from "../data/metricasGrafico";

export function useGraficoAlmacenamiento() {
  const [data, setData] = useState<DatosAlmacenamiento[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const simularAPI = setTimeout(() => {
      setData(dataAlmacenamiento);
      setCargando(false);
    }, 600);
    return () => clearTimeout(simularAPI);
  }, []);

  return { data, cargando };
}
