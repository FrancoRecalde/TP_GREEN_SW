import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLeaf, FaHome, FaVideo, FaInfoCircle } from 'react-icons/fa';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar-green-theme">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center brand-logo">
                    <FaLeaf className="me-2 leaf-icon" />
                    <span className="brand-name">Grupo</span>
                    <span className="brand-tagline">10</span>
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" />
                
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto nav-links">
                        <Nav.Link as={Link} to="/" className="nav-item">
                            <FaHome className="nav-icon" />
                            <span style={{ paddingLeft: 5 }}> Inicio</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/video1" className="nav-item">
                            <FaVideo className="nav-icon" />
                            <span style={{ paddingLeft: 5 }}> Sustentabilidad</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/video2" className="nav-item">
                            <FaVideo className="nav-icon" />
                            <span style={{ paddingLeft: 5 }}> Conclusion sustentabilidad</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/video3" className="nav-item">
                            <FaInfoCircle className="nav-icon" />
                            <span style={{ paddingLeft: 5 }}> Green Software</span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/video4" className="nav-item">
                            <FaInfoCircle className="nav-icon" />
                            <span style={{ paddingLeft: 5 }}> Conclusion green software</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;