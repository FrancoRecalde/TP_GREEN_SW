import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container className="my-5 text-center">
            <Card className="p-4 shadow-lg border-0 rounded-3">
                <Card.Body>
                    <h1 className="display-4 text-success mb-4">Bienvenidos a Green Software</h1>
                    <p className="lead mb-4">
                        En la Cátedra de Green Software, exploramos cómo la tecnología puede ser una fuerza para el cambio positivo en la sostenibilidad. Este proyecto es el resultado de nuestra investigación y compromiso con un futuro digital más responsable.
                    </p>
                    <p className="mb-4">
                        El software, en todas sus formas, tiene un impacto en nuestro planeta. Desde el consumo energético de los servidores hasta la eficiencia de las aplicaciones que usamos a diario, cada línea de código cuenta. Aquí profundizamos en el concepto de **sustentabilidad en el desarrollo de software**, un pilar fundamental para mitigar la huella ambiental de la era digital.
                    </p>
                    <p className="mb-5">
                        Te invitamos a explorar nuestro contenido:
                        un informe detallado que aborda la sustentabilidad desde diversas perspectivas (¿Qué es? ¿Por qué? ¿Para qué? ¿Quién? ¿Cuándo? ¿Dónde? ¿Cómo? ¿Con qué? ¿Cuánto?) y tres videos explicativos que ilustran los principios clave del software verde de manera accesible.
                    </p>

                    <Row className="justify-content-center g-4 mb-5">
                        <Col md={4}>
                            <Link to="/video1" className="text-decoration-none">
                                <Button variant="outline-success" size="lg" className="w-100 py-3 shadow-sm rounded-pill">
                                    Ver Video 1
                                </Button>
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link to="/video2" className="text-decoration-none">
                                <Button variant="outline-success" size="lg" className="w-100 py-3 shadow-sm rounded-pill">
                                    Ver Video 2
                                </Button>
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link to="/video3" className="text-decoration-none">
                                <Button variant="outline-success" size="lg" className="w-100 py-3 shadow-sm rounded-pill">
                                    Ver Video 3
                                </Button>
                            </Link>
                        </Col>
                    </Row>

                    <hr className="my-5" />

                    <h2 className="text-primary mb-4">Nuestro Informe: La Sustentabilidad Paso a Paso</h2>
                    <p className="text-muted">
                        El informe completo, fruto del trabajo de la Cátedra de Green Software y el Grupo 10, detalla cada faceta de la sustentabilidad en el contexto tecnológico. Desde su definición hasta las métricas clave para su implementación efectiva, este documento sirve como una guía exhaustiva. Podrás profundizar en los **"¿Qué, Por qué, Para qué, Quién, Cuándo, Dónde, Cómo, Con qué y Cuánto?"** de la sustentabilidad, ofreciendo una visión integral y práctica para desarrolladores, empresas y cualquier interesado en la tecnología verde.
                    </p>
                    <p className="text-muted">
                        Creemos firmemente que la sustentabilidad es una responsabilidad compartida y una oportunidad para innovar. Explora nuestros recursos y únete a nosotros en este camino hacia un futuro más verde.
                    </p>
                    {/* Opcional: Podrías añadir un botón aquí para descargar el informe o un link a una página con el informe completo */}
                    {/* <Button variant="success" size="lg" className="mt-4">
                        Descargar Informe Completo
                    </Button> */}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Home;