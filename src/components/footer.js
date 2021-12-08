import React from 'react';
import './footer.css';
import Logo from './logo.png';
import { Link } from 'react-router-dom';


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
              <Link to='/coffee'>Kahvit</Link>
              <Link to='/tea'>Teet</Link>
              <Link to='/stuff'>Oheistuotteet</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
            <h6>OTA YHTEYTTÄ</h6>
              <p>contact@kaffia.com</p>
            </div>
            <div className='footer-link-items'>
              <h6>SEURAA MEITÄ</h6>
              <Link to='/contact'> <i class='fab fa-instagram' /> Instagram</Link>
              <Link to='/contact'> <i class='fab fa-facebook-f' /> Facebook</Link>
              <Link to='/contact'> <i class='fab fa-youtube' /> Youtube</Link>
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

