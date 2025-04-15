import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import styles from "./dashboard.module.css";
// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HistogramChart = () => {
  const data = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "Time spendings",
        data: [45, 60, 30, 80, 55, 70, 90, 75, 50, 65, 85, 95],
        backgroundColor: ["#FF5733", "#33B5FF", "#FFBD33", "#33FF57", "#8E44AD"],
        borderRadius: 5,
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Prevents automatic aspect ratio adjustments
    scales: {
      y: {
        beginAtZero: true,
        max: 100, // Ensure max value is set higher than the highest data point
        ticks: {
          stepSize: 40, // Set interval to 10
          callback: function (value) {
            return value + " hr"; // Append "hr" to each tick value
          },
        },
      },
      x: {
        ticks: {
          autoSkip: false, // Ensures all labels are shown
        },
      },
    },
    plugins: {
      legend: {
        display: true, // Ensure legend is visible
      },
    },
    barThickness: 20,
    animation: {
      duration: 1000,
      easing: "easeInOutBounce",
    }, // Adjust the thickness of the bars for better spacing
  };
  

  return (
    <div className={styles.barDiv}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default HistogramChart;
