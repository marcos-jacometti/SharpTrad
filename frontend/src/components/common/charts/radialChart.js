import React from "react";
import ApexChart from "react-apexcharts";

export default function Chart({fontSize}) {
    const options = {
        chart: {
            type: 'radialBar'
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 15,
                    size: '70%'
                },
                dataLabels: {
                    showOn: 'always',
                    value: {
                        color: '#000',
                        fontSize: `${fontSize}`,
                        show: true
                    }
                }
            }
        },
        stroke: {
            lineCap: 'round'
        },
        labels: ['']
    };

    const series = [97];

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  height: '30vh' }}>
            <ApexChart
                options={options}
                series={series}
                type="radialBar"
                height={310}
                width={400}
            />
        </div>
    );
}
