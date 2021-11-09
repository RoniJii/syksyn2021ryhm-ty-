import './App.css';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Footer from './components/footer.js';
import data from "./components/back/Data/Data";
import Header from "./components/front/Header/Header";
import {BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {

const {productItems} = data;





  return (
    
      <>
      <Router>
      <Header/>
      </Router>
      

      <div class="container">
      <div class="row" id="erivi">
        <div class="column col-6 float-start" id="teksti">
          <p>Kahvila xxx on paikallinen yritys, joka tuo kauppaan laadukkaita erityiskahveja ja teetä.
            Tuotteet ovat huolella jalostettuja, jotta saisit parhaimman nautinnon!</p>
        </div>
      <div class="container-fluid">
 
<p>Löydät monipuolisesta valikoimasta erilaista kahvia, teetä ja jauhamistuotteita.</p>
<p>Tuotteiden hankinnassa pyritään tuottamaan vastuullisesti ja eettisesti. Kaikille 
            tuottajille annetaan tasavertaisesti palkkaa ja kuljetusta pyritään minimoimaan.</p>
            <p>Joulun sesonkituotteet ovat nyt saapuneet! Löydät täältä jouluisia makuja!</p>
            <p>Voit nyt tilata Woltin kautta tuotteita tai hakea paikan päältä. Tervetuloa!</p>
</div>
        <figure>
          <img src={require("./images/kuva4.jpg").default} height="360" class="column col-6 float-end" alt="kahvipussi"/>
        </figure>
      </div>
      </div>

      <Footer></Footer>

    </>
  )
}
