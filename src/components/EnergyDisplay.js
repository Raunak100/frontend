import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import '../styles/EnergyDisplay.css';  // If it's in the src/styles/ folder



const EnergyDisplay = ({ energyData }) => {
  const chartData = {
    labels: energyData.map(item => item.date),
    datasets: [
      {
        label: 'Energy Consumption (kWh)',
        data: energyData.map(item => item.energyUsage),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div>
      <h2>Energy Data Display</h2>
      {energyData.length === 0 ? (
        <p>No data available</p>
      ) : (
        <Line data={chartData} />
      )}
    </div>
  );
};

export default EnergyDisplay;
