import React from "react";
import { Line } from "react-chartjs-2";
import Chart, { scales } from "chart.js/auto";
import 'chartjs-adapter-date-fns';
import metrics from '../../metrics.json'
var newArray = metrics.timeStat.stats;

const labels = newArray.map(row => new Date(row.timestamp) * 1000);
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Active Users',
      data: newArray.map(row => row.numberOfUsers),
      borderColor: 'rgb(249,167,24)',
      backgroundColor: 'rgb(249,167,24)',
      yAxisID: 'y1',
    },
    {
        borderColor: 'rgb(196,252,143, 0.7)',
        borderWidth: 2,
        backgroundColor: 'rgb(196,252,143, 0.6)',
        data: newArray.map(row => row.percentiles.min.toFixed(0)),
        fill: true,
        yAxisID: 'y',
    },
    {
        borderColor: 'rgb(128,247,126, 0.7)',
        borderWidth: 2,
        backgroundColor: 'rgb(128,247,126, 0.6)',
        data: newArray.map(row => row.percentiles.percentile25.toFixed(0)),
        fill: true,
        yAxisID: 'y',
    },
    {
        borderColor: 'rgb(110,242,172, 0.7)',
        borderWidth: 2,
        backgroundColor: 'rgb(110,242,172, 0.6)',
        data: newArray.map(row => row.percentiles.percentile50.toFixed(0)),
        fill: true,
        yAxisID: 'y',
    },
    {
        borderColor: 'rgb(97,237,230, 0.7)',
        borderWidth: 2,
        backgroundColor: 'rgb(97,237,230, 0.6)',
        data: newArray.map(row => row.percentiles.percentile75.toFixed(0)),
        fill: true,
        yAxisID: 'y',
    },
    {
        borderColor: 'rgb(87,199,224, 0.7)',
        borderWidth: 2,
        backgroundColor: 'rgb(87,199,224, 0.6)',
        data: newArray.map(row => row.percentiles.percentile80.toFixed(0)),
        fill: true,
        yAxisID: 'y',
    },
    {
        borderColor: 'rgb(77,161,211, 0.7)',
        borderWidth: 2,
        backgroundColor: 'rgb(77,161,211, 0.6)',
        data: newArray.map(row => row.percentiles.percentile85.toFixed(0)),
        fill: true,
        yAxisID: 'y',
    },
    {
        borderColor: 'rgb(72,122,216, 0.7)',
        borderWidth: 2,
        backgroundColor: 'rgb(72,122,216, 0.6)',
        data: newArray.map(row => row.percentiles.percentile90.toFixed(0)),
        fill: true,
        yAxisID: 'y',
    },
    {
        borderColor: 'rgb(63,81,204, 0.7)',
        borderWidth: 2,
        backgroundColor: 'rgb(63,81,204, 0.6)',
        data: newArray.map(row => row.percentiles.percentile95.toFixed(0)),
        fill: true,
        yAxisID: 'y',
    },
    {
        borderColor: 'rgb(115,52,220, 0.7)',
        borderWidth: 2,
        backgroundColor: 'rgb(115,52,220, 0.6)',
        data: newArray.map(row => row.percentiles.percentile99.toFixed(0)),
        fill: true,
        yAxisID: 'y',
    },
    {
        borderColor: 'rgb(199,56,6, 0.7)',
        borderWidth: 2,
        backgroundColor: 'rgb(199,56,6, 0.6)',
        data: newArray.map(row => row.percentiles.max.toFixed(0)),
        fill: true,
        yAxisID: 'y',
    },
  ],
};
const options = {
  responsive: true,
  aspectRatio: 4,
  interaction: {
    intersect: false,
    mode: 'index',
  },
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Response Time Percentiles over time',
      color: '#dee2e6',
      font: {
        size: 16
      }
    },
  },
  elements: {
    point: {
      radius: 0
    }
  },
  layout: {
    padding: 10
  },
  scales: {
    x: {
      type: 'time',
      time: {
        displayFormats: {
          second: 'HH:mm:ss'
        }
      },
      ticks: {
        color: '#dee2e6',
        font: {
          size: 12
        },
        stepSize: 5
      },
      grid: {
        display: false
      }
    },
    y: {
      position: 'left',
      ticks: {
        color: '#dee2e6',
        font: {
          size: 12
        },
        stepSize: 25
      },
      title: {
        display: true,
        text: "Pesponse Time(ms)",
        color: '#dee2e6',
        font: {
          size: 12,
          weight: 'bolder'
        }
      },
      grid: {
        display: true,
        color: '#dee2e6',
        lineWidth: 0.5,
        offset: false,
        tickWidth: 0
      }
    },
    y1: {
      position: 'right',
      ticks: {
        color: '#dee2e6',
        font: {
          size: 12
        },
        stepSize: 100
      },
      title: {
        display: true,
        text: "Number of Active Users",
        color: '#dee2e6',
        font: {
          size: 12,
          weight: 'bolder'
        }
      },
      grid: {
        display: true,
        color: '#dee2e6',
        lineWidth: 0.5,
        offset: false,
        tickWidth: 0
      }
    }
  }
}
const PercentileChart = () => {
  return (
    <div id="user-chart" >
      <Line data={data} options={options} />
    </div>
  );
};
export default PercentileChart;