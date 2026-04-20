import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useGraficoAlmacenamiento } from "../../../hooks/useGraficoAlmacenamiento";

export function GraficoAlmacenamiento() {
  const { data, cargando } = useGraficoAlmacenamiento();

  return (
    <div className="flex-1 min-h-54 flex flex-col rounded-lg border border-[#E9E9EF] bg-[#FFFFFF] p-3.5">
      <div className="flex justify-between items-center mb-3">
        <div className="flex flex-col gap-1.5">
          <span className="text-[#545A6D] font-inter font-semibold text-[11px] leading-none">
            Total libre (GB)
          </span>
          <span className="text-[#545A6D] font-inter font-semibold text-[11px] leading-none">
            100
          </span>
        </div>

        <div className="flex flex-col gap-1.5 items-end">
          <span className="text-[#545A6D] font-inter font-semibold text-[11px] leading-none">
            % Libre
          </span>
          <span className="text-[#545A6D] font-inter font-semibold text-[11px] leading-none">
            15%
          </span>
        </div>
      </div>
      {cargando ? (
        <div className="flex-1 flex items-center justify-center">
          <span className="text-[#8A94A6] font-inter text-[11px]">
            Cargando gráfico...
          </span>
        </div>
      ) : (
        <div className="relative flex-1 w-full flex flex-col mt-1">
          <span className="absolute left-0 bottom-2 text-[#545A6D] font-inter font-semibold text-[11px] bg-white z-10 pr-2">
            0
          </span>
          <span className="absolute right-0 bottom-2 text-[#545A6D] font-inter font-semibold text-[11px] bg-white z-10 pl-2">
            10%
          </span>
          <div className="flex-1 w-full overflow-x-auto overflow-y-hidden custom-scrollbar pb-4 px-6">
            <div className="min-w-212.5 h-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorGb" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3BE4AD" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3BE4AD" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="dia"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#545A6D", fontSize: 11, fontWeight: 500 }}
                    dy={8}
                    padding={{ left: 20, right: 20 }}
                  />
                  <YAxis hide domain={[0, 100]} />
                  <Tooltip
                    wrapperStyle={{ pointerEvents: "none" }}
                    contentStyle={{
                      borderRadius: "8px",
                      border: "none",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                    labelStyle={{ color: "#545A6D", fontWeight: "bold" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="gb"
                    stroke="#3BE4AD"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorGb)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
