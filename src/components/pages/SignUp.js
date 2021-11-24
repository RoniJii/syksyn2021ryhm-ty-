import React from 'react';
import '../../App.css';
import { useState } from 'react';
import { useHistory } from 'react-router';

export default function SignUp() {

  const [values, setValues] = useState({
    id: "",
    password: ""
  });

  const handleIdInputChange = (e) => {
    setValues({...values, id: e.target.value})
  }

  const handlePasswordInputChange = (e) => {
    setValues({...values, password: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const history = useHistory();

  const registerPage = () => {
  let path = '/Register'
  history.push(path);
  }

  return (
    <>
      <div className='sign-up'>
        <div className='form-container'>
          <form className='signup-form' onSubmit={handleSubmit}>
            <label>KÄYTTÄJÄTUNNUS</label>
            <input
              onChange={handleIdInputChange}
              value={values.id}
              id='user_name'
              className='form-field'
              placeholder='käyttäjätunnus'
              name='user_name'
            />
            <label>SALASANA</label>
            <input
              onChange={handlePasswordInputChange}
              value={values.password}
              id='password'
              className='form-field'
              placeholder='salasana'
              name='password'
            />
            <button className='form-field' type='submit'>Kirjaudu sisään</button>
            <br/>
            <label>UUSI ASIAKAS?</label>
            <button className='form-field' type='submit'
              onClick={registerPage}>
              Rekisteröidy
            </button>
          </form>
        </div>
      </div>
    </>   
  );
}