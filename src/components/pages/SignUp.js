import React from 'react';
import '../../App.css';
//import { Form } from 'react-bootstrap';

export default function SignUp() {
  return (
    <>
      <div className='sign-up'>
        <div className='form-container'>
          <div className='signup-form'>
            <label>KÄYTTÄJÄTUNNUS</label>
            <input
              id='käyttäjätunnus'
              className='form-field'
              placeholder='käyttäjätunnus'
              name='käyttäjätunnus'
            />
            <label>SALASANA</label>
            <input
              id='salasana'
              className='form-field'
              placeholder='salasana'
              name='salasana'
            />
            <button className='form-field' type='submit'>Kirjaudu sisään</button>
            <br/>
            <label>UUSI ASIAKAS?</label>
            <button className='form-field' type='submit'>Rekisteröidy</button>
          </div>
        </div>
      </div>
    </>   
  );
}