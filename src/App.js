import './App.css';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    
      <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Kahvikauppa xxxx</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#home">Koti</Nav.Link>
              <Nav.Link href="#link">Linkki</Nav.Link>
              <NavDropdown title="Pudotushommeli" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">jtn</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">toinen jtn</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">jtn muuta</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
      <div class="container">
      <div class="row" id="erivi">
        <div class="column col-6 float-start" id="teksti">
          <p>Kahvila xxx on paikallinen yritys, joka tuo kauppaan laadukkaita erityiskahveja ja teetä.
             Tuotteet ovat huolella jalostettuja, jotta saisit parhaimman nautinnon!</p>
        </div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        <figure>
          <img src={require("./images/kahvipussit.jpg").default} height="360" class="column col-6 float-end" alt="kahvipussi"/>
        </figure>
      </div>
      </div>

      <div class="container-fluid">
        <p>Löydät monipuolisesta valikoimasta erilaista kahvia, teetä ja jauhamistuotteita.</p>
      </div>

      <div class="container-fluid">
        <p>Tuotteiden hankinnassa pyritään tuottamaan vastuullisesti ja eettisesti. Kaikille 
            tuottajille annetaan tasavertaisesti palkkaa ja kuljetusta pyritään minimoimaan.</p>
      </div>

     <div class="container-fluid">
      <p>Joulun sesonkituotteet ovat nyt saapuneet! Löydät täältä jouluisia makuja!</p>
     </div>

     <div class="container-fluid">
        <p>Voit nyt tilata Woltin kautta tuotteita tai hakea paikan päältä. Tervetuloa!</p>
      </div>

      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="/#" className="nav-link px-2 text-muted">Koti</a></li>
          <li className="nav-item"><a href="/#" className="nav-link px-2 text-muted">jne</a></li>
          <li className="nav-item"><a href="/#" className="nav-link px-2 text-muted">Hinnat</a></li>
          <li className="nav-item"><a href="/#" className="nav-link px-2 text-muted">Usein kysyttyä</a></li>
          <li className="nav-item"><a href="/#" className="nav-link px-2 text-muted">Jotain meistä</a></li>
        </ul>
        <p class="text-center text-muted">Syksy 2021 Verkkokauppa projekti</p>
      </footer>
    </>
  )
}
