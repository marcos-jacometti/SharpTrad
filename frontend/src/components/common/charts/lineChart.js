import React from "react";
import ApexChart from "react-apexcharts";

export default function LineChart() {
    const options = {
        chart: {
            type: 'line',
            height: '100%'
        },
        xaxis: {
            categories: getLastSixMonths()
        },
        stroke: {
            curve: 'smooth'
        },
        markers: {
            size: 4,
            colors: ["#FFA41B"],
            strokeColors: "#fff",
            strokeWidth: 2,
            hover: {
                size: 7,
            }
        },
        yaxis: {
            title: {
                text: 'Valores'
            }
        },
        dataLabels: {
            enabled: false
        }
    };

    const series = [{
        name: 'Sinais',
        data: [300, 600, 900, 1200, 1500, 1800]
    }];

    return (
        <div style={{ width: '100%', height: '85%' }}>
            <ApexChart
                options={options}
                series={series}
                type="line"
                height="100%"
                width="100%"
            />
        </div>
    );
}

function getLastSixMonths() {
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const currentMonth = new Date().getMonth();
    let lastSixMonths = [];

    for (let i = 0; i < 6; i++) {
        lastSixMonths.push(months[(currentMonth - i + 12) % 12]);
    }

    return lastSixMonths.reverse();
}