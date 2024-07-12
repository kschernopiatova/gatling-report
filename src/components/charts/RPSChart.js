import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
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
      label: 'rps',
      data: newArray.map(row => row.rps),
      backgroundColor: 'rgb(94,123,226, 0.8)',
      fill: true,
      yAxisID: 'y',
    },
  ]
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
      text: 'Number of requests per second',
      color: '#dee2e6',
      font: {
        size: 16
      }
    }
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
        stepSize: 100
      },
      title: {
        display: true,
        text: "Number of Requests",
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
const RPSChart = () => {
  return (
    <div id="rps-chart">
      <Line data={data} options={options} />
    </div>
  );
};
export default RPSChart;