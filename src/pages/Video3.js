import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Video3 = () => {
    // Reemplaza el src del iframe con la URL de tu video de YouTube/Vimeo
    const videoUrl = "https://www.youtube.com/embed/K9Ugnlkjcio"; // Enlace embebido correcto para YouTube

    return (
        <Container className="my-5">
            <Card className="p-4 shadow-lg border-0 rounded-3">
                <Card.Body className="text-center">
                    <h2 className="text-success mb-4">Video 3: Preguntas green software</h2>
                    <p className="lead mb-4">
                        En este tercer video, exploramos los aspectos mas importantes del informe sobre sustentabilidad, el que, el para que y el cuando.
                    </p>

                    <div className="embed-responsive embed-responsive-16by9 mb-4" style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
                        <iframe
                            className="embed-responsive-item"
                            src={videoUrl}
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

export default Video3;