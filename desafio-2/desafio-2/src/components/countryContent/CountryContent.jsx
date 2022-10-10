import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import ApiService from '../../controller/ApiService'
import './countryContent.css'

export default function CountryContent() {

    const [countrylist, setCountryList] = useState([])
    const [filteredList, setFilteredList] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const [currentPage, setCurrentPage] = useState(0)
    const itensPerPage = 15
    const pages = Math.ceil(countrylist.length / itensPerPage)
    const startIndex = currentPage * itensPerPage
    const endIndex = startIndex + itensPerPage
    const currentItens = countrylist.slice(startIndex, endIndex)

    useEffect(() => {
        ApiService()
            .then(setCountryList)
    }, [])

    useEffect(() => {
        if (searchValue !== '') {
            let filterSearch = searchValue.toLowerCase();
            let list = countrylist.filter(item => (item.Country.toLowerCase().includes(filterSearch)) || (item.ISO2.toLowerCase().includes(filterSearch)));
            setFilteredList(list);
        }
    }, [searchValue])


    return (
        <div className="countrytable">
            <div style={{ width: '30%', display: 'flex', padding: '20px 0px' }}>
                <input placeholder='Search Country' style={{ width: '100%', marginRight: '10px', padding: '10px', borderRadius: '5px' }} value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                <Link className='view__btn' to={'dados'}>View</Link>
            </div>
            <table className="table">
                <thead className="table__head">
                    <tr style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                        <td></td>
                        <td>Country</td>
                        <td>Symbol</td>
                    </tr>
                </thead>
                <tbody className="table__body" >
                    {
                        searchValue !== '' ? (
                            filteredList.map(item => {
                                return (
                                    <tr style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                        <td><input type="checkbox" /></td>
                                        <td>{item.Country}</td>
                                        <td>{item.ISO2}</td>
                                    </tr>
                                )
                            })
                        ) : (
                            currentItens.map(item => {
                                return (
                                    <tr style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                        <td><input type="checkbox" /></td>
                                        <td>{item.Country}</td>
                                        <td>{item.ISO2}</td>
                                    </tr>
                                )
                            }))
                    }
                </tbody>
            </table>
            <div>
                {searchValue !== '' ? (
                    ''
                ) : (Array.from(Array(pages), (item, index) => {
                    return <button
                        className='pagination__btn'
                        value={index}
                        onClick={(e) => setCurrentPage(Number(e.target.value))}
                    >{index + 1}</button>
                }))}
            </div>
        </div>
    )
}