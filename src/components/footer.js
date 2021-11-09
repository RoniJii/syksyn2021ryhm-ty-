import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <figure>
           
            </figure>
          </div>
          <div class='footer-link-items'>
            <h4>Tuotteemme</h4>
            <a href='/'>Kahvit</a>
            <a href='/'>Teet</a>
            <a href='/'>Oheistuotteet</a>
          </div>
          <div class='footer-link-items'>
            <h4>Ota yhteyttä</h4>
            <p>Yhteystiedot tähän</p>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h4>Seuraa meitä</h4>
            <a href='/'><i class='fab fa-instagram'/> Instagram</a>
            <a href='/'><i class='fab fa-facebook-f'/> Facebook</a>
            <a href='/'><i class='fab fa-youtube'/> Youtube</a>
          </div>
        </div>
      </section>

      <section class='rights'>
        <div>
          <p>Verkkopalveluprojekti, Ryhmä 10 &copy; 2021</p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
