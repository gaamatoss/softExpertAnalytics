import React, { useEffect, useState } from 'react';
import ApiServiceDetail from '../../controller/ApiServiceDetail';
import './countryDetail.css'

export default function CountryDetail() {

    const [infoList, setInfoList] = useState([])
    useEffect(() => {
        ApiServiceDetail()
            .then(setInfoList)
    }, [])
    console.log(infoList);

    function dateFormat(date) {
        let data = new Date(date)
        let dia = data.getDate().toString().padStart(2, '0')
        let mes = (data.getMonth() + 1).toString().padStart(2, '0')
        let ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    return (
        <div className='main'>
            <table className='table__detail'>
                <thead className='table__head'>
                    <tr style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                        <td>Date</td>
                        <td>Confirmed</td>
                        <td>Deaths</td>
                        <td>Recovered</td>
                        <td>Active</td>
                    </tr>
                </thead>
                <tbody className='table__body'>
                    {infoList.map(item => {
                        return (
                            <tr key={item.Date} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                <td>{dateFormat(item.Date)}</td>
                                <td>{item.Confirmed}</td>
                                <td>{item.Deaths}</td>
                                <td>{item.Recovered}</td>
                                <td>{item.Active}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}