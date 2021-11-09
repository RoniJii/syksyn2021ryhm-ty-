import React, { Component } from 'react';
import './navbar.css';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';

export default class NavbarComp extends Component {
    render() {
      return (
        <div>
          <Navbar bg="light" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#">Kaffia</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                  <Nav.Link href="#">ETUSIVU</Nav.Link>
                  <NavDropdown title="TUOTTEET" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#">KAHVIT</NavDropdown.Item>
                    <NavDropdown.Item href="#">TEET</NavDropdown.Item>
                    <NavDropdown.Item href="#">OHEISTUOTTEET</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#">OTA YHTEYTTÄ</Nav.Link>
                  <Nav.Link href="#">KIRJAUDU SISÄÄN</Nav.Link>
                  <Nav.Link href="#"><i class = "fas fa-shopping-cart"/></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      );
    }
}