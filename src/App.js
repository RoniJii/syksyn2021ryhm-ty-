import './App.css';
import React, {useEffect,useState} from 'react';
import { Route, Switch } from 'react-router';
import NavbarComp from './components/NavbarComp';
import Footer from './components/footer';
import Home from './components/pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router';


function App() {
const [cart, setCart] = useState([]);

let location = 

useEffect(()=> {
  if ('cart' in localStorage) {
    setCart(JSON.parse(localStorage.getItem('cart')));
  }
},[])

  return (
    <>
      <NavbarComp/>
      <div id="content" className="container-fluid">
        
      </div>
      <Footer/>
    </>
  );
}

export default App;
