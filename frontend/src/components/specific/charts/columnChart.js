import React from "react";
import ApexChart from "react-apexcharts";

export default function ColumnChart() {
    const options = {
        chart: {
            type: 'bar',
            height: '100%'
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Free', 'Pro', 'Expert'],
        },
        yaxis: {
            title: {
                text: 'Values'
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val;
                }
            }
        }
    };

    const series = [{
        name: 'Sinais',
        data: [3, 5, 10]
    }];

    return (
        <div style={{ width: '100%', height: '85%' }}>
            <ApexChart
                options={options}
                series={series}
                type="bar"
                height="100%"
                width="100%"
            />
        </div>
    );
}