import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartData,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export type TDoughnutChart = ChartData<"doughnut", number[], string>;

export function DoughnutChart({ data }: { data: TDoughnutChart }) {
  return (
    <Doughnut
      data={data}
    />
  );
}
