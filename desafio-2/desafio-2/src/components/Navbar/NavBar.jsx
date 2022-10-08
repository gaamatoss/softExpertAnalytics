import React from "react";
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import './navBar.css'

export default function NavBar() {
    return (
        <Navbar className="navbar">
            <Navbar.Brand href="#">Covid Status</Navbar.Brand>
            <Nav>
                <Nav.Item icon={<HomeIcon />}>Tela Principal</Nav.Item>
                <Nav.Item>Dados</Nav.Item>
                <Nav.Item>Detalhamento</Nav.Item>
            </Nav>
        </Navbar>
    )
}