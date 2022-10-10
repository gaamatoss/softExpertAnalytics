import React from 'react';
import CountryContent from '../components/countryContent/CountryContent'


export default function TelaPrincipal() {
    return (
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: "column" }}>
            <CountryContent />
        </div>
    )
}