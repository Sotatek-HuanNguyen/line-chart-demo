import React from "react";
import logo from "./logo.svg";
import { Line } from "react-chartjs-2";
import pattern from "patternomaly";
import { faker } from "@faker-js/faker";
import "./App.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  // Title,
  Tooltip,
  // Legend,
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        color: "rgba(255,255,255,0.1)",
        borderColor: "black",
      },
    },
    y: {
      grid: {
        display: true,
        color: "rgba(255,255,255,0.1)",
        borderColor: "black",
      },
    },
    // yAxes: {
    //   grid: {
    //     color: "red",
    //     display: true,
    //     drawBorder: true,
    //   },
    //   ticks: {
    //     beginAtZero: false,
    //     color: "aaaaaa",
    //     // borderColor: "aaaaaa",
    //     fontSize: 12,
    //   },
    // },
    // xAxes: {
    //   grid: {
    //     drawBorder: true,
    //     color: "#aaaaa",
    //   },
    //   ticks: {
    //     beginAtZero: true,
    //     color: "aaaaaa",
    //     fontSize: 12,
    //   },
    // },
  },
};

const labels = [
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Satuday",
  "Sunday",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Main",
      data: [3400, 3000, 2500, 4500, 2500, 3400, 3000],
      borderWidth: 3,
      backgroundColor: "rgba(195, 40, 96, 0.1)",
      borderColor: "rgba(195, 40, 96, 1)",
      pointBackgroundColor: "rgba(195, 40, 96, 1)",
      pointBorderColor: "#202b33",
      pointBorderWidth: 2,
      pointHoverBackgroundColor: "red",
      pointRadius: 6,
      tension: 0.5,
      fill: true,
      pointStrokeColor: "#202b33",
      pointHighlightStroke: "rgba(225,225,225,0.9)",
    },
    {
      label: "Account",
      data: [1900, 1700, 2100, 3600, 2200, 2500, 2000],
      fill: true,
      borderWidth: 3,
      backgroundColor: "rgba(255, 172, 100, 0.1)",
      borderColor: "rgba(255, 172, 100, 1)",
      pointBackgroundColor: "rgba(255, 172, 100, 1)",
      pointBorderColor: "#202b33",
      pointBorderWidth: 2,
      pointRadius: 6,
      responsive: true,
      tension: 0.5,
    },
    {
      label: "Category",
      data: [1000, 1400, 1100, 2600, 2000, 900, 1400],
      fill: true,
      borderWidth: 3,
      backgroundColor: "rgba(19, 71, 34, 0.3)",
      borderColor: "rgba(88, 188, 116, 1)",
      pointBackgroundColor: "rgba(88, 188, 116, 1)",
      pointBorderColor: "#202b33",
      pointBorderWidth: 2,
      pointRadius: 6,
      responsive: true,
      tension: 0.5,
    },
  ],
};

function App() {
  return (
    <div className="chart">
      <Line options={options} data={data} />
    </div>
  );
}

export default App;
