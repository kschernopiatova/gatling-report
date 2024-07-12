import React from "react";
import { PolarArea } from "react-chartjs-2";
import Chart, { scales } from "chart.js/auto";
import metrics from '../../metrics.json'

var newArray = metrics.generalRequestStats.slice(1);

const labels = newArray.map(row => row.name);
const data = {
    labels: labels,
    datasets: [
        {
            label: 'KO',
            data: newArray.map(row => row.failedCount),
            backgroundColor: 'rgb(241,91,78)',
            borderColor: 'rgb(255, 255, 255)',
            borderWidth: 1
        },
        {
            label: 'OK',
            data: newArray.map(row => row.successCount),
            backgroundColor: 'rgb(104,182,91)',
            borderColor: 'rgb(255, 255, 255)',
            borderWidth: 1
        }
    ],
};
const options = {
    interaction: {
        intersect: false,
        mode: 'index'
      },
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Number of requests',
            color: '#dee2e6',
            font: {
                size: 16
            }
        }
    },
    layout: {
        padding: 10
    },
    scales: {
        r: {
            ticks: {
                display: false
            }
        }
    }
}
const PolarChart = () => {
    return (
        <div className="polar">
            <PolarArea data={data} options={options} />
        </div>
    );
};
export default PolarChart;