import { useEffect } from "react";
import useData from "../../hooks/useData";
import BarChart from "./BarChart";
import DataChip from "./DataChip";
import { LineChart } from "./LineChart";

export default function Predictions() {
  const { data, loading } = useData();

  useEffect(() => {
    console.log("Loading: ", loading);
    console.log("Data: ", data);
  }, [data]);

  if (loading || data === null) return <p>Loading...</p>;
  return (
    <div className="predictions">
      <div className="graphs flex h-screen justify-center items-center">
        <div className="flex gap-5">
          <div
            className="left w-1/3"
            style={{
              backgroundColor: "#1C1C1C",
              padding: "3rem",
              borderRadius: "1rem",
            }}
          >
            <BarChart data={data.bar} />
          </div>

          <div className="right flex flex-col gap-10">
            <div className="top flex">
              <div className="dataChips flex gap-4">
                {data.chips.map((chip) => (
                  <DataChip {...chip} key={chip.label} />
                ))}
              </div>{" "}
            </div>
            <div
              className="bottom"
              style={{
                backgroundColor: "#1C1C1C",
                padding: "3rem",
                borderRadius: "1rem",
              }}
            >
              <LineChart data={data.line} />
            </div>
          </div>
        </div>
      </div>
      <button>Export data file</button>
    </div>
  );
}
