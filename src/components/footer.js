import React from 'react';
import './footer.css';
import Logo from './logo.png';

export default function footer() {
  return (
    <div className='container-fluid'>
      <section className='footer-links'>
        <div className='footer-link-wrapper row'>
          <div className='footer-link-items col-sm-12 col-md-3'>
            <figure>
              <img className= 'footer-logo' src={Logo} style={{ maxHeight: '130px'}}></img>
            </figure>
          </div>
          <div className='footer-link-items col-sm-12 col-md-3'>
            <h6>TUOTTEEMME</h6>
            <a href='/'>Kahvit</a>
            <a href='/'>Teet</a>
            <a href='/'>Oheistuotteet</a>
          </div>
          <div className='footer-link-items col-sm-12 col-md-3'>
            <h6>OTA YHTEYTTÄ</h6>
            <p>Yhteystiedot tähän</p>
          </div>
          <div className='footer-link-items col-sm-12 col-md-3'>
            <h6>SEURAA MEITÄ</h6>
            <a href='/'><i class='fab fa-instagram'/> Instagram</a>
            <a href='/'><i class='fab fa-facebook-f'/> Facebook</a>
            <a href='/'><i class='fab fa-youtube'/> Youtube</a>
          </div>
        </div>
      </section>

      <section className='rights col-sm-12 col-md-12'>
        <div className='text-center'>
          <hr/>
          <p>Verkkopalveluprojekti, Ryhmä 10 &copy; 2021</p>
        </div>
      </section>
    </div>
  );
}