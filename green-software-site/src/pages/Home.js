import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container className="my-5 text-center">
            <Card className="p-4 shadow-lg border-0 rounded-3">
                <Card.Body>
                    <h1 className="display-4 text-success mb-4">Bienvenidos a nuestro espacio sobre Green Software</h1>
                    <p className="lead mb-4">
                        Somos un grupo consultor especializado en sustentabilidad aplicada a las tecnologías digitales. En este sitio compartimos el resultado de nuestra investigación y análisis, reflejado en dos informes complementarios.
                    </p>
                    <p className="mb-4">
                        Por un lado, desarrollamos un informe general sobre **sustentabilidad**, abordando las preguntas clave: ¿Qué es?, ¿Por qué?, ¿Para qué?, ¿Quién?, ¿Cuándo?, ¿Dónde?, ¿Cómo?, ¿Con qué? y ¿Cuánto?. Por otro lado, realizamos un segundo informe enfocado en el concepto específico de **Green Software**, donde aplicamos el mismo enfoque interrogativo, adaptado al mundo del desarrollo de software responsable.
                    </p>
                    <p className="mb-5">
                        Acompañamos ambos informes con videos explicativos. Cada informe cuenta con una presentación principal y una conclusión, para que puedas entender los conceptos y también reflexionar sobre su impacto.
                    </p>

                    <Row className="justify-content-center g-4 mb-5">
                        <Col md={4}>
                            <Link to="/video1" className="text-decoration-none">
                                <Button variant="outline-success" size="lg" className="w-100 py-3 shadow-sm rounded-pill">
                                    Video 1: Introducción a la Sustentabilidad
                                </Button>
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link to="/video2" className="text-decoration-none">
                                <Button variant="outline-success" size="lg" className="w-100 py-3 shadow-sm rounded-pill">
                                    Video 2: Conclusión sobre Sustentabilidad
                                </Button>
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link to="/video3" className="text-decoration-none">
                                <Button variant="outline-success" size="lg" className="w-100 py-3 shadow-sm rounded-pill">
                                    Video 3: Introducción al Green Software
                                </Button>
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Link to="/video4" className="text-decoration-none">
                                <Button variant="outline-success" size="lg" className="w-100 py-3 shadow-sm rounded-pill">
                                    Video 4: Conclusión sobre Green Software
                                </Button>
                            </Link>
                        </Col>
                    </Row>

                    <hr className="my-5" />

                    <h2 className="text-primary mb-4">Nuestros Informes: Dos miradas, un mismo compromiso</h2>
                    <p className="text-muted">
                        El primer informe aborda la sustentabilidad de forma general, integrando aspectos sociales, ambientales y económicos. El segundo se enfoca en cómo estos principios se aplican al desarrollo de software, en lo que hoy se conoce como **Green Software**.
                    </p>
                    <p className="text-muted">
                        En ambos casos, organizamos la información a partir de una misma estructura de preguntas clave, que nos permiten reflexionar desde diferentes ángulos y construir una visión integral. Te invitamos a explorar nuestro contenido, pensado tanto para profesionales como para cualquier persona interesada en generar un impacto positivo desde la tecnología.
                    </p>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Home;
