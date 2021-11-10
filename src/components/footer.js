import React from 'react';
import './footer.css';
import Logo from './logo.png';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <figure>
              <img className= "Header-logo" src={Logo} style={{ maxHeight: '150px'}}></img>
            </figure>
          </div>
          <div className='footer-link-items'>
            <h4>Tuotteemme</h4>
            <a href='/'>Kahvit</a>
            <a href='/'>Teet</a>
            <a href='/'>Oheistuotteet</a>
          </div>
          <div className='footer-link-items'>
            <h4>Ota yhteyttä</h4>
            <p>Yhteystiedot tähän</p>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h4>Seuraa meitä</h4>
            <a href='/'><i class='fab fa-instagram'/> Instagram</a>
            <a href='/'><i class='fab fa-facebook-f'/> Facebook</a>
            <a href='/'><i class='fab fa-youtube'/> Youtube</a>
          </div>
        </div>
      </section>

      <section className='rights col-sm-12 col-md-12'>
        <div className="text-center">
          <p>Verkkopalveluprojekti, Ryhmä 10 &copy; 2021</p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
