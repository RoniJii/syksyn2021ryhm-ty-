import React from 'react';
import '../../App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


let loginUrl = "http://localhost/syksynprojekti2021/login.php";
let resUrl = "http://localhost/syksynprojekti2021/resources.php";

function loginUser(e, username, password, setAuth, setUsername, setPassword ){
  e.preventDefault();

  let params = {
    headers: { 'Authorization':'Basic ' +  window.btoa( username+":"+password ) },
    withCredentials: true
  }

  axios.post(loginUrl, null, params)
    .then(response => {
      if(response.status === 200){
        sessionStorage.setItem("token", response.data.token);
        setAuth(true);
        setUsername("");
        setPassword("");
      }
    })
    .catch(e => console.log(e))
}

export default function SignUp() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth ] = useState(false);

  //Asetetaan loggautuneeksi, jos sessionStoragessa on talletettu token
  if(!auth && sessionStorage.getItem("token")){
    setAuth(true);
  }

  if(!auth){
    return (
      <div className='sign-up'>
      <form onSubmit={ e => loginUser(e,username,password,setAuth,setUsername,setPassword)} className='form-container'>
        <div className='signup-form'>
          <h2>Kirjaudu sisään</h2>
          <label>KÄYTTÄJÄTUNNUS</label>
          <input type='text' value={username} onChange={e=>setUsername(e.target.value)}/>
          <label>SALASANA</label>
          <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>
          <button className='form-field' type='submit' value="Login">
            Kirjaudu sisään
          </button>
          
          <br/>
          <label>UUSI ASIAKAS?</label>
          <button className='form-field' type='submit'>
            Rekisteröidy
          </button>
        </div>
      </form>
    </div>
    );
  }else{
    return <Resource auth={setAuth} username={setUsername}/>;  
  }
  
}


function requestWitBearer(setContent){
  let params = {
    headers: { 'authorization':'Bearer ' + sessionStorage.getItem("token") },
    withCredentials: true,
  }
  axios.get(resUrl, params)
    .then(response=>setContent(response.data.message))
    .catch(e=> console.log(e))
}

function Resource(props){

  const [content, setContent] = useState("");
  
  useEffect(() => 
  requestWitBearer(setContent), 
  []);
  
  const logout = () => {
    sessionStorage.removeItem("token");
    props.auth(false);
  }

  return(
    <div style={{marginTop: '150px'}}>
      <p>Logged in as: {content}</p>
      <button className='btn btn-dark' type='button' onClick={logout}>Logout</button>
    </div>
  );
}
