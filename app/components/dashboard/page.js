// import '../formlayout/formlayout.css';
// const Genetic=()=>{
//     return(
//         <div className="ui_kit">
// Genetic Page
//         </div>
//     )
// }
// export default Genetic;
// components/LineGraph.js
"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import '../formlayout/formlayout.css';
const Genetic = ({ data }) => {
  // Extracting timestamps and values from the JSON data
  const months = data.map((entry) => moment(entry.timestamp).format('MMM'));
  const newProducts = data.map((entry) => entry.new);
  const completedProducts = data.map((entry) => entry.completed);
  const canceledProducts = data.map((entry) => entry.canceled);

  // Creating the dataset for the graph
  const chartData = {
    labels: months,
    datasets: [
      {
        label: 'New Products',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
        data: newProducts,
      },
      {
        label: 'Completed Products',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        fill: false,
        data: completedProducts,
      },
      {
        label: 'Canceled Products',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        fill: false,
        data: canceledProducts,
      },
    ],
  };

  // Options for the graph
  const chartOptions = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
  <div className="ui_kit">
  <Line data={chartData} options={chartOptions} />;
  </div>
  )
};

export default Genetic;
