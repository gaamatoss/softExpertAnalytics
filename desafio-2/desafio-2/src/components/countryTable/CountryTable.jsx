import React, { useEffect, useState } from 'react';
import ApiService from '../../controller/ApiService'
import './countrytable.css'

export default function CountryTable() {

    const [list, setList] = useState([])

    useEffect(() => {
        ApiService()
            .then(setList)
    }, [])
    console.log('Lista:', list);

    return (
        <div className="countrytable">
            <table className="table">
                <thead className="table__head">
                    <tr style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                        <td></td>
                        <td>Country</td>
                        <td>Symbol</td>
                    </tr>
                </thead>
                <tbody className="table__body">
                    {list.map(item => {
                        return (
                            <tr style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                <td><input type="checkbox" /></td>
                                <td>{item.Country}</td>
                                <td>{item.ISO2}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}