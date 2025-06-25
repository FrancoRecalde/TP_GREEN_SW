import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Video1 = () => {
  


    return (
        <Container className="my-5">
            <Card className="p-4 shadow-lg border-0 rounded-3">
                <Card.Body className="text-center">
                    <h2 className="text-success mb-4">Video 1: Preguntas sustentabilidad</h2>
                    <p className="lead mb-4">
                        En este primer video, exploramos los aspectos mas importantes del informe sobre sustentabilidad, el para que, el por que y el como.
                    </p>

                    <div className="embed-responsive embed-responsive-16by9 mb-4" style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
                        <iframe
                            className="embed-responsive-item"
                            src={"https://www.youtube.com/embed/fcSrKnusRCg"} // URL de inserción correcta para el video de YouTube
                            title="Video 1 de Software Verde"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '8px' }}
                        ></iframe>
                    </div>

                </Card.Body>
            </Card>
        </Container>
    );
};

export default Video1;