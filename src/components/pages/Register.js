import React from 'react';
import '../../App.css';
import { useState } from 'react';
import { useHistory } from 'react-router';

export default function Register() {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: ""
  });

  const handleFirstNameInputChange = (e) => {
    setValues({...values, firstName: e.target.value})
  }

  const handleLastNameInputChange = (e) => {
    setValues({...values, lastName: e.target.value})
  }

  const handleUserNameInputChange = (e) => {
    setValues({...values, userName: e.target.value})
  }

  const handleEmailInputChange = (e) => {
    setValues({...values, email: e.target.value})
  }

  const handlePassWordInputChange = (e) => {
    setValues({...values, password: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const history = useHistory();

  const goShopping = () => {
    let path = '/kahvi'
    history.push(path);
  }

  return (
    <>
      <div className='register'>
        <form className='form-container'>
          <div className='signup-form' onSubmit={handleSubmit}>
            <h2>Rekisteröidy</h2>
            <label>ETUNIMI</label>
            <input
              onChange={handleFirstNameInputChange}
              value={values.firstName}
              id='firstName'
              className='form-field'
              placeholder='etunimi'
              name='firstName'
            />
            <label>SUKUNIMI</label>
            <input
              onChange={handleLastNameInputChange}
              value={values.lastName}
              id='lastName'
              className='form-field'
              placeholder='sukunimi'
              name='lastName'
            />
            <label>KÄYTTÄJÄTUNNUS</label>
            <input
              onChange={handleUserNameInputChange}
              value={values.userName}
              id='userName'
              className='form-field'
              placeholder='käyttäjätunnus'
              name='userName'
            />
            <label>SÄHKÖPOSTI</label>
            <input
              onChange={handleEmailInputChange}
              value={values.email}
              id='email'
              className='form-field'
              placeholder='sähköposti'
              name='email'
            />
            <label>SALASANA</label>
            <input
              onChange={handlePassWordInputChange}
              value={values.password}
              id='password'
              className='form-field'
              placeholder='salasana'
              name='password'
            />
            <button className='form-field' type='submit'
              onClick={goShopping}>
              Rekisteröidy
            </button>
          </div>
        </form>
      </div>
    </>   
  );
}