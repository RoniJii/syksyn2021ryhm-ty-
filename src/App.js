import './App.css';
import React from 'react';
import NavbarComp from './components/NavbarComp';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Carousel } from 'react-bootstrap';

function App() {
  return (
      <>
      <NavbarComp/>
      <div class="container">
      <div class="row" id="erivi">
        <div class="column col-6 float-start" id="teksti">
          <p>Kahvila xxx on paikallinen yritys, joka tuo kauppaan laadukkaita erityiskahveja ja teetä.
            Tuotteet ovat huolella jalostettuja, jotta saisit parhaimman nautinnon!</p>
        </div>
      <div class="container-fluid">

      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/kuva5.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/kuva6.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/kuva7.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 
<p>Löydät monipuolisesta valikoimasta erilaista kahvia, teetä ja jauhamistuotteita.</p>
<p>Tuotteiden hankinnassa pyritään tuottamaan vastuullisesti ja eettisesti. Kaikille 
            tuottajille annetaan tasavertaisesti palkkaa ja kuljetusta pyritään minimoimaan.</p>
            <p>Joulun sesonkituotteet ovat nyt saapuneet! Löydät täältä jouluisia makuja!</p>
            <p>Voit nyt tilata Woltin kautta tuotteita tai hakea paikan päältä. Tervetuloa!</p>
</div>
{Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
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
      <Card>
        <Card.Img src={require("./images/kuva2.png").default} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          Tuotteiden hankinnassa pyritään tuottamaan vastuullisesti ja eettisesti. Kaikille 
            tuottajille annetaan tasavertaisesti palkkaa ja kuljetusta pyritään minimoimaan.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}

{Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img src={require("./images/kuva3.jpg").default} />
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
      <Card>
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

{Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img src={require("./images/kuva5.jpg").default} />
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
      </div>

      <Footer/>

    </>
  );
}

export default App;
