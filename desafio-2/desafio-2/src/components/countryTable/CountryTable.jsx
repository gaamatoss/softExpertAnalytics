import React, { useEffect, useState } from 'react';
import ApiService from '../../controller/ApiService'
import './countrytable.css'

export default function CountryTable(props) {

    const [list, setList] = useState([])
    const [itensPerPage, setItensPerPage] = useState(15)
    const [currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(list.length / itensPerPage)
    const startIndex = currentPage * itensPerPage
    const endIndex = startIndex + itensPerPage
    const currentItens = list.slice(startIndex, endIndex)

    useEffect(() => {
        ApiService()
            .then(setList)
    }, [])

    return (
        <div className="countrytable">
            <div>
                {Array.from(Array(pages), (item, index) => {
                    return <button
                        className='pagination__btn'
                        value={index}
                        onClick={(e) => setCurrentPage(Number(e.target.value))}
                    >{index + 1}</button>
                })}
            </div>
            <table className="table">
                <thead className="table__head">
                    <tr style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                        <td></td>
                        <td>Country</td>
                        <td>Symbol</td>
                    </tr>
                </thead>
                <tbody className="table__body">
                    {currentItens.map(item => {
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