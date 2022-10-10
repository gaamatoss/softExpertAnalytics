import React from "react";
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import './navBar.css'

export default function NavBar() {
    return (
        <Navbar className="navbar">
            <Navbar.Brand href="#">Covid Data</Navbar.Brand>
            <Nav>
                <Nav.Item icon={<HomeIcon />} href="/">Home</Nav.Item>
                <Nav.Item href="/dados">Dados</Nav.Item>
                <Nav.Item href="/detalhamento">Detalhamento</Nav.Item>
            </Nav>
        </Navbar>
    )
}