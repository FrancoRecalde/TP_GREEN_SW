import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-4 mt-auto"> {/* mt-auto para empujar al fondo */}
            <Container>
                <p className="mb-0">&copy; {new Date().getFullYear()} Proyecto Software Verde - [Tu Nombre/Materia]</p>
                <p className="mb-0"><small>Construyendo tecnología más sostenible.</small></p>
            </Container>
        </footer>
    );
};

export default Footer;