import React from 'react';
import './footer.css';
import Logo from './logo.png';

export default function footer() {
    return (
      <div className='container-fluid'>
        <div className='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
            <figure>
                <img className='logo' alt='logo' src={Logo} style={{ maxHeight: '130px'}}></img>
              </figure>
            </div>
            <div className='footer-link-items'>
            <h6>TUOTTEEMME</h6>
              <p>Kahvi</p>
              <p>Tee</p>
              <p>Muut</p>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
            <h6>OTA YHTEYTTÄ</h6>
              <p>contact@kaffia.com</p>
            </div>
            <div className='footer-link-items'>
              <h6>SEURAA MEITÄ</h6>
              <p> <i class='fab fa-instagram' /> Instagram</p>
              <p> <i class='fab fa-facebook-f' /> Facebook</p>
              <p> <i class='fab fa-youtube' /> Youtube</p>
            </div>
          </div>
        </div>
        <div className='rights'>
          <hr/> 
          <p>Verkkopalveluprojekti, Ryhmä 10 &copy; 2021</p>
        </div>
      </div>
    );
}

