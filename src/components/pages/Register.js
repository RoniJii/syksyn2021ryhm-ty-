import React from 'react';
import '../../App.css';

export default function Register() {
  return (
    <>
      <div className='register'>
        <form className='form-container'>
          <div className='register-form'>
            <label>ETUNIMI</label>
            <input
              id='firstName'
              className='form-field'
              placeholder='etunimi'
              name='firstName'
            />
            <label>SUKUNIMI</label>
            <input
              id='lastName'
              className='form-field'
              placeholder='sukunimi'
              name='lastName'
            />
            <label>KÄYTTÄJÄTUNNUS</label>
            <input
              id='userName'
              className='form-field'
              placeholder='käyttäjätunnus'
              name='userName'
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
              id='password'
              className='form-field'
              placeholder='salasana'
              name='password'
            />
            <button className='form-field' type='submit'>Rekisteröidy</button>
          </div>
        </form>
      </div>
    </>   
  );
}