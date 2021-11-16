import React from 'react';
import '../../App.css';

export default function SingUp() {
  return <h1 className=''></h1>;

    return(
        <>
        <Form>
  <Form.Group className="mb-3" controlId="formGroupNimi">
    <Form.Label>Käyttäjänimi</Form.Label>
    <Form.Control type="Nimi" placeholder="Nimi" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupTunnus">
    <Form.Label>Käyttäjätunnus</Form.Label>
    <Form.Control type="Tunnus" placeholder="Tunnus" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Salasana</Form.Label>
    <Form.Control type="Salasana" placeholder="Salasana" />
  </Form.Group>
  </Form>


        </>

        
    )
}