import React from 'react';
import logo from './logo.svg';
import { Line } from 'react-chartjs-2';
import pattern from 'patternomaly'
import { faker } from '@faker-js/faker';
import './App.css';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Main',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderWidth: 3,
      backgroundColor: 'rgba(255, 0, 0, 0.2)',
      borderColor: 'red',
      pointBackgroundColor: "red",
      pointBorderColor: 'white',
      pointBorderWidth: 2,
      pointHoverBackgroundColor: 'red',
      pointRadius: 5,
      tension: 0.5,
      fill: true,
    },
    {
      label: 'Account',
      data: labels.map(() => faker.datatype.number({ min: 50, max: 1000 })),
      fill: true,
      borderWidth: 3,
      backgroundColor: 'rgba(255, 255, 0, 0.2)',
      borderColor: 'yellow',
      pointBackgroundColor: "yellow",
      pointBorderColor: 'white',
      pointBorderWidth: 2,
      pointRadius: 5,
      responsive:true,
      tension: 0.5
    },    {
      label: 'Category',
      data: labels.map(() => faker.datatype.number({ min: 200, max: 1000 })),
      fill: true,
      borderWidth: 3,
      backgroundColor: 'rgba(0, 128, 0, 0.2)',
      borderColor: 'green',
      pointBackgroundColor: "green",
      pointBorderColor: 'white',
      pointBorderWidth: 2,
      pointRadius: 5,
      responsive:true,
      tension: 0.5
    },
  ],
};

function App() {
  return (
      <Line options={options} data={data} />
  );
}

export default App;
