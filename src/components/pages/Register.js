import React from 'react';
import '../../App.css';

export default function Register() {
  return (
    <>
      <div className='register'>
        <div className='form-container'>
          <div className='signup-form'>
            <label>ETUNIMI</label>
            <input
              id='firstname'
              className='form-field'
              placeholder='etunimi'
              name='firstname'
            />
            <label>SUKUNIMI</label>
            <input
              id='lastname'
              className='form-field'
              placeholder='sukunimi'
              name='lastname'
            />
            <label>KÄYTTÄJÄTUNNUS</label>
            <input
              id='käyttäjätunnus'
              className='form-field'
              placeholder='käyttäjätunnus'
              name='käyttäjätunnus'
            />
            <label>SÄHKÖPOSTI</label>
            <input
              id='email'
              className='form-field'
              placeholder='sähköposti'
              name='email'
            />
            <label>SALASANA</label>
            <input
              id='salasana'
              className='form-field'
              placeholder='salasana'
              name='salasana'
            />
            <button className='form-field' type='submit'>Rekisteröidy</button>
          </div>
        </div>
      </div>
    </>   
  );
}