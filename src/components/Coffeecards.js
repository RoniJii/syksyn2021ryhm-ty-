import React from 'react';
import './productcards.css';
import { Link } from 'react-router-dom';

const URL = "http://localhost/syksynprojekti2021/";

function CoffeeCards({product,url,addToCart}) {
  return (
    <>
    <div className='cards'>
    <h3 className='teksti1'>Kahviesittelyä</h3>
      <div className='cards__container'>
        <div className='card__wrapper'>
          <ul className='card__items'>
            <li className='card__item'>
              <Link className='card__item__link'>
                <figure className='card__item__pic-wrap'>
                  <img className='card__item__img'
                    src= {URL + 'images/kahvi12.jpg'}  alt={product?.name}
                  />
                </figure>
                <div className='card__item__info'>
                  <div className='card__item__text'>
                  <h5>Tuotekuvaus tuotteesta</h5>
                  <p>infoa tuotteesta</p>
                  </div>
                  <button className='btn' type='button' 
                    onClick={e => addToCart(product)}> Lisää ostoskoriin
                  </button>
                </div>
              </Link>
            </li>
            <li className='card__item'>
              <Link className='card__item__link'>
                <figure className='card__item__pic-wrap'>
                  <img className='card__item__img'
                    src= {URL + 'images/kahvi12.jpg'}  alt={product?.name}
                  />
                </figure>
                <div className='card__item__info'>
                  <div className='card__item__text'>
                  <h5>Tuotekuvaus tuotteesta</h5>
                  <p>infoa tuotteesta</p>
                  </div>
                  <button className='btn' type='button' 
                    onClick={e => addToCart(product)}> Lisää ostoskoriin
                  </button>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div> 
    </>
  );
}

export default CoffeeCards;