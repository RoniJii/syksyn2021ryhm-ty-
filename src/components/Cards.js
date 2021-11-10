import React from 'react';
import './cards.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function Cards() {
    return (
        <div>
        {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
        <Card style={{background: '#DDA35D'}}>
            <Card.Img src={require("./images/kuva1.png").default} />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            Löydät monipuolisesta valikoimasta erilaista kahvia, teetä ja jauhamistuotteita.
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        ))}

        {Array.from({ length: 1 }).map((_, idx) => (
            <Col>
            <Card style={{background: '#DDA35D'}}>
                <Card.Img src={require("./images/kuva2.png").default} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                Tuotteiden hankinnassa pyritään tuottamaan vastuullisesti ja eettisesti. Kaikille 
                    tuottajille maksetaan tasavertaisesti palkkaa ja kuljetusta pyritään minimoimaan.
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        ))}

        {Array.from({ length: 1 }).map((_, idx) => (
            <Col>
            <Card style={{background: '#DDA35D'}}>
                <Card.Img src={require("./images/kuva8.jpg").default} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        ))}

        {Array.from({ length: 1 }).map((_, idx) => (
            <Col>
            <Card style={{background: '#DDA35D'}}>
                <Card.Img src={require("./images/kuva4.jpg").default} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        ))}
        </div>
    );
}

export default Cards;