import { useEffect, useState } from "react";
import axios from "axios";
import { TBarchart } from "../routes/predictions/BarChart";
import { TDataChip } from "../routes/predictions/DataChip";
import { TLineChart } from "../routes/predictions/LineChart";

type TData = {
  chips: TDataChip[];
  bar: TBarchart;
  line: TLineChart;
} | null;

type TAPIData = {
  column_names: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string];
  data: Array<
    [
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number
    ]
  >;
};

function processData(data: TAPIData): TData {
  const chips: TDataChip[] = [
    {
      label: "APR",
      value: 7256,
      change: 0.1102,
      isHighlighted: true,
    },
    {
      label: "PCN",
      value: 3589,
      change: 0.003,
    },
    {
      label: "Field Magnitude",
      value: 2356,
      change: 0.0608,
      negative: true,
    },
    {
      label: "Proton Flux",
      value: 156,
      change: 0.1503,
      negative: true,
      isHighlighted: true,
    },
  ];

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const bar: TBarchart = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => Math.random() * 1000),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const line = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => Math.random() * 1000),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => Math.random() * 1000),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  // average of idx 9 for all rows
  chips[0].value =
    data.data.reduce((acc, row) => acc + row[9], 0) / data.data.length;
  chips[0].value = chips[0].value.toFixed(2);
  //   change of chips[0] is the ratio between chips 0 value and the average of 24 rows of idx 9
  //   avg 24 rows of idx 9
  const oldAvg =
    data.data.slice(0, 24).reduce((acc, row) => acc + row[9], 0) / 24;
  chips[0].change = data.data.reduce((acc, row) => acc + row[9], 0) / oldAvg;

  return {
    chips,
    bar,
    line,
  };
}

function useData(): { data: TData; loading: boolean } {
  const [data, setData] = useState<TData>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.skyflares.space/data?from=1491053210&to=1491262010", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        setData(processData(response.data));
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return { data, loading };
}

export default useData;
