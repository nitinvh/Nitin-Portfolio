import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from '../../public/home.svg';

const MyNavbar = () => {
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <div className="w-100 d-flex justify-content-between mx-5">
                <Navbar.Brand href="/" className="fs-1 hover-effect d-flex justify-content-center align-items-center">
                    <img src={Home} className="me-3" />
                    Nitin-Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-3" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    <Nav.Link href="#skills" className="fs-2 hover-effect me-3" onClick={(e) => handleScroll(e, 'skills')}>Skills</Nav.Link>
                        <Nav.Link href="#experience" className="fs-2 hover-effect me-3" onClick={(e) => handleScroll(e, 'experience')}>Experience</Nav.Link>
                        <Nav.Link href="#projects" className="fs-2 hover-effect me-3" onClick={(e) => handleScroll(e, 'projects')}>Projects</Nav.Link>
                        <Nav.Link href="#about-me" className="fs-2 hover-effect" onClick={(e) => handleScroll(e, 'about-me')}>About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
            </div>
        </Navbar>
    );
}

export default MyNavbar;
