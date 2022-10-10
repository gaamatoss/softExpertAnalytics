import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Panel, Button } from 'rsuite';
import { Link } from 'react-router-dom'
import './countryData.css'

const chartOptions = {
    title: {
        text: ''
    },
    chart: {
        type: 'column'
    },
    series: [
        {
            name: 'N° de Casos',
            data: [100, 200, 30, 100, 50, 60]
        }
    ]
}

export default function CountryData() {

    return (
        <div className='mainData'>
            <Panel header="Brasil" bordered className='panelData' >
                <HighchartsReact highcharts={Highcharts} options={chartOptions} />
                <Link to={'/detalhamento'}><Button appearance='primary'>View Detail</Button></Link>
            </Panel>
            <Panel header="Argentina" bordered className='panelData' >
                <HighchartsReact highcharts={Highcharts} options={chartOptions} />
                <Link to={'/detalhamento'}><Button appearance='primary'>View Detail</Button></Link>
            </Panel>
            <Panel header="Chile" bordered className='panelData'>
                <HighchartsReact highcharts={Highcharts} options={chartOptions} />
                <Link to={'/detalhamento'}><Button appearance='primary'>View Detail</Button></Link>
            </Panel>
        </div>
    )
}