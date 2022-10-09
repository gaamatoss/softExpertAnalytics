import React from 'react';
import CountryTable from '../components/countryTable/CountryContent'


export default function TelaPrincipal() {
    return (
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: "column" }}>
            <CountryTable />
        </div>
    )
}