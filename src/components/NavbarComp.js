import React, { Component } from 'react';
import './navbar.css';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';

export default class NavbarComp extends Component {
    render() {
      return (
        <div>
          <Navbar fixed="top" class="navbar" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#">
                <img className= "Header-logo" src="/images/logo.png"></img>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                  <Nav.Link href="#">ETUSIVU</Nav.Link>
                  <NavDropdown title="TUOTTEET" id="navbarScrollingDropdown">
                    <NavDropdown.Item  href="#">KAHVIT</NavDropdown.Item>
                    <NavDropdown.Item  href="#">TEET</NavDropdown.Item>
                    <NavDropdown.Item href="#">OHEISTUOTTEET</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#">OTA YHTEYTTÄ</Nav.Link>
                  <Nav.Link href="#">KIRJAUDU SISÄÄN</Nav.Link>
                  <Nav.Link href="#"><i class = "fas fa-shopping-cart"/></Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                  type="search"
                  placeholder="Hae tuotteita"
                  className="me-2"
                  aria-label="Search"
                  />
                  <Button variant="outline-success">Hae</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      );
    }
}