import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import Logo from '../../Logo/logo';
import Classes from './navbar.module.css';

const ClientNav = ()=>{
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>
                    <Logo/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link className={Classes.Links} href="/job">Jobs</Nav.Link>
                        <Nav.Link className={Classes.Links} href="/company">Companies</Nav.Link>
                        <Nav.Link className={`${Classes.Employers} ${Classes.Links}`} href="/employers">Employers</Nav.Link>
                        <Nav.Link className={Classes.Links} href="/login">SIGNIN</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default ClientNav;