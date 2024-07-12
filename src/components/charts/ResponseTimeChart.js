import React from "react";
import { Bar } from "react-chartjs-2";
import Chart, { layouts } from "chart.js/auto";
import metrics from '../../metrics.json'

var minCount = 0;
var avgCount = 0;
var longCount = 0;
var failed = metrics.generalRequestStats[0].failedCount
var requests = metrics.singleRequestStats

for (let i = 0; i < requests.length; i++) {
    if (requests[i].result) {
        if (requests[i].responseTime < 800) {
            minCount++;
        } else if (requests[i].responseTime >= 800 && requests[i].responseTime < 1200) {
            avgCount++;
        } else if (requests[i].responseTime >= 1200) {
            longCount++;
        }
    }
}

const data = {
    labels: ["t < 800ms", "t=[800ms,1200ms)", "t >= 1200ms", "failed"],
    datasets: [
        {
            data: [minCount, avgCount, longCount, failed],
            backgroundColor: [
                'rgb(104,182,91)',
                'rgba(255, 159, 64, 0.2)',
                'rgb(249,167,24)',
                'rgb(241,91,78)'
            ],
            barThickness: 50,
            borderColor: 'rgb(255, 255, 255)',
            borderWidth: 1
        }
    ]
};
const options = {
    interaction: {
        intersect: false,
        mode: 'index',
    },
    plugins: {
        title: {
            display: true,
            text: 'Response time ranges',
            color: '#dee2e6',
            font: {
                size: 16
            }
        },
        legend: {
            display: false,
            labels: {
                color: '#dee2e6'
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: '#dee2e6',
                font: {
                    size: 12
                }
            },
            grid: {
                display: false
            }
        },
        y: {
            title: {
                display: true,
                text: "Number of requests",
                color: '#dee2e6',
                font: {
                    size: 12,
                    weight: 'bolder'
                }
            },
            ticks: {
                color: '#dee2e6',
                font: {
                    size: 12
                },
                stepSize: 2500
            },
            grid: {
                display: true,
                color: '#dee2e6',
                lineWidth: 0.5,
                offset: false,
                tickWidth: 0
            }
        }
    },
    layout: {
        padding: 10
    }
}
const ResponseTimeChart = () => {
    return (
        <div className="response-time">
            <Bar data={data} options={options} />
        </div>
    );
};
export default ResponseTimeChart;