import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="success" variant="dark" expand="lg" className="shadow-sm">
            <Container>
                <Navbar.Brand href="/TP_GREEN_SW">Green Software</Navbar.Brand>
                {/* Puedes añadir un logo aquí si lo deseas, optimizado para web */}
            </Container>
        </Navbar>
    );
};

export default Header;