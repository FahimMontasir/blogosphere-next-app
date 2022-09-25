import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Total sales generated from views",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

interface Props {
  color: string;
}

export function SalesChart({ color }: Props) {
  const data = {
    labels,
    datasets: [
      {
        label: "Views",
        data: [10, 15, 30, 50, 20, 40, 10],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Sales",
        data: [3, 10, 20, 15, 10, 30, 2],
        backgroundColor: color,
      },
    ],
  };
  return (
    <div
      style={{ width: "99%" }}
      className="bg-white p-5 my-8 rounded-md shadow-lg"
    >
      <Bar options={options} data={data} />
    </div>
  );
}
