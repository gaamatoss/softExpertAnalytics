import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import './countryData.css'

const chartOptions = {
    chart: {
        type: 'column'
    },
    series: [
        {
            name: 'Profit',
            data: [100, 200, 30, 100, 50, 60]
        }
    ]
}

export default function CountryData() {

    return (
        <div style={{ width: '80%' }}>
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
    )
}