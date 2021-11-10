import './App.css';
import React from 'react';
import NavbarComp from './components/NavbarComp';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Kuva3 from './images/kuva3.jpg';
import Kuva5 from './images/kuva5.jpg';
import Kuva6 from './images/kuva6.jpg';


function App() {
  return (
      <>
      <NavbarComp/>
      <div class="container">
      <div class="row" id="erivi">
        <div class="column col-6 float-start" id="teksti">
          <p>Kahvila xxx on paikallinen yritys, joka tuo kauppaan laadukkaita erityiskahveja ja teetä.
            Tuotteet ovat huolella jalostettuja, jotta saisit parhaimman nautinnon!</p>
        </div>
      <div class="container-fluid">

      <Carousel>
  <Carousel.Item>
    <img width={900} height={620}
      className="d-block w-100"
      src={Kuva6}
      alt="First slide"
    />
    <Carousel.Caption>
    <h3>Voit nyt tilata Woltin kautta tuotteita tai hakea paikan päältä. Tervetuloa!</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={620}
      className="d-block w-100"
      src={Kuva5}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3> Joulun sesonkituotteet ovat nyt saapuneet! Löydät täältä jouluisia makuja!</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={620}
      className="d-block w-100"
      src={Kuva3}
      alt="Third slide"
    />

    <Carousel.Caption style={{color: ''}}>
     <h3>Haluatko jauhaa omat papusi? Meiltä löydät papujen jauhamiseen tarvittavat laitteet!</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>


      </div>
      </div>

      <Footer/>

    </>
  );
}

export default App;
