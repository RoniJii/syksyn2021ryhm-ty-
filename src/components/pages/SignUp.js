import React from 'react';
import '../../App.css';
import { Form } from 'react-bootstrap';
import Kuva4 from '../images/kuva4.jpg';

export default function SignUp() {
  return(
    <div className="sign-up">
      <div>
      <img width={900} height={620}
                    className="d-block w-100"
                    src={Kuva4}
                    />
      </div>

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


    </div>

        
  )
}