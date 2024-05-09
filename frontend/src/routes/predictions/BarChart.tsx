import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export type TBarchart = ChartData<"bar", number[], string>;

export default function BarChart({ data }: { data: TBarchart }) {
  return (
    <div className="dailyStormsBarChart">
      <div className="dailyStorms">
        <p className="text-4xl">Daily Storms</p>
        <p className="text-4xl">9.0kpi</p>
        <Bar
          width={1000}
          height={1500}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: false,
                // position: "top" as const,
              },
              title: {
                display: false,
                text: "Daily storms",
              },
            },
            scales: {
              x: {
                grid: {
                  display: false, // Hide x-axis gridlines
                },
                ticks: {
                  display: false, // Hide x-axis labels
                },
              },
              y: {
                grid: {
                  display: false, // Hide y-axis gridlines
                },
                ticks: {
                  display: false, // Hide y-axis labels
                },
              },
            },
            datasets: {
              bar: {
                barPercentage: 0.5,
                categoryPercentage: 0.5,
                borderColor: "rgba(0, 0, 0, 0)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
            },
          }}
          data={data}
        />
      </div>
    </div>
  );
}
