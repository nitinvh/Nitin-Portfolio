import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from '../../public/home.svg';

const MyNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <div className="w-100 d-flex justify-content-between mx-5">
                <Navbar.Brand href="#home" className="fs-1 hover-effect d-flex justify-content-center align-items-center">
                    <img src={Home} className="me-2" />
                    Home
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#experience" className="fs-2 hover-effect me-3">Experience</Nav.Link>
                        <Nav.Link href="#projects" className="fs-2 hover-effect me-3">Projects</Nav.Link>
                        <Nav.Link href="#about-me" className="fs-2 hover-effect">About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default MyNavbar;
