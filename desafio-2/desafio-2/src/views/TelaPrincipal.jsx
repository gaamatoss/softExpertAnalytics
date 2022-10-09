import React from "react";
import CountryTable from '../components/countryTable/CountryTable'
import { Input, Button } from 'rsuite';


export default function TelaPrincipal() {
    return (
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: "column" }}>
            <div style={{ width: '20%', display: 'flex', padding: '20px 0px' }}>
                <Input placeholder="Search Country" style={{ width: '100%', marginRight: '10px' }} />
                <Button appearance="primary" style={{ width: '20%' }}>View</Button>
            </div>
            <CountryTable />
        </div>
    )
}