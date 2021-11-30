import React from 'react';
import './productcards.css';
import { Link } from 'react-router-dom';

const URL = "http://localhost/syksynprojekti2021/";

function TeaCards({product,url,addToCart}) {
  return (
    <>
    <div className='cards'>
    <h3 className='teksti1'>Tee-esittelyä</h3>
      <div className='cards_container'>
        <div className='card_wrapper'>
          <ul className='card_items'>
            <div className='card_item'>
              <Link className='card_item_link'>
                <figure className='card_item_pic-wrap'>
                  <img className='card_item_img'
                    src= {URL + 'images/kahvi12.jpg'}  alt={product?.name}
                  />
                </figure>
                <div className='card_item_info'>
                  <div className='card_item_text'>
                    <h5>Tuotenimi</h5>
                    <p>€</p>
                  </div>
                  <button className='btn' type='button' 
                    onClick={e => addToCart(product)}> Lisää ostoskoriin
                  </button>
                </div>
              </Link>
            </div>
            <div className='card_item'>
              <Link className='card_item_link'>
                <figure className='card_item_pic-wrap'>
                  <img className='card_item_img'
                    src= {URL + 'images/kahvi12.jpg'}  alt={product?.name}
                  />
                </figure>
                <div className='card_item_info'>
                  <div className='card_item_text'>
                    <h5>Tuotenimi</h5>
                    <p>€</p>
                  </div>
                  <button className='btn' type='button' 
                    onClick={e => addToCart(product)}> Lisää ostoskoriin
                  </button>
                </div>
              </Link>
            </div>
            <div className='card_item'>
              <Link className='card_item_link'>
                <figure className='card_item_pic-wrap'>
                  <img className='card_item_img'
                    src= {URL + 'images/kahvi12.jpg'}  alt={product?.name}
                  />
                </figure>
                <div className='card_item_info'>
                  <div className='card_item_text'>
                    <h5>Tuotenimi</h5>
                    <p>€</p>
                  </div>
                  <button className='btn' type='button' 
                    onClick={e => addToCart(product)}> Lisää ostoskoriin
                  </button>
                </div>
              </Link>
            </div>
            <div className='card_item'>
              <Link className='card_item_link'>
                <figure className='card_item_pic-wrap'>
                  <img className='card_item_img'
                    src= {URL + 'images/kahvi12.jpg'}  alt={product?.name}
                  />
                </figure>
                <div className='card_item_info'>
                  <div className='card_item_text'>
                    <h5>Tuotenimi</h5>
                    <p>€</p>
                  </div>
                  <button className='btn' type='button' 
                    onClick={e => addToCart(product)}> Lisää ostoskoriin
                  </button>
                </div>
              </Link>
            </div>
          </ul>
          <ul className='card_items'>
            <div className='card_item'>
              <Link className='card_item_link'>
                <figure className='card_item_pic-wrap'>
                  <img className='card_item_img'
                    src= {URL + 'images/kahvi12.jpg'}  alt={product?.name}
                  />
                </figure>
                <div className='card_item_info'>
                  <div className='card_item_text'>
                    <h5>Tuotenimi</h5>
                    <p>€</p>
                  </div>
                  <button className='btn' type='button' 
                    onClick={e => addToCart(product)}> Lisää ostoskoriin
                  </button>
                </div>
              </Link>
            </div>
            <div className='card_item'>
              <Link className='card_item_link'>
                <figure className='card_item_pic-wrap'>
                  <img className='card_item_img'
                    src= {URL + 'images/kahvi12.jpg'}  alt={product?.name}
                  />
                </figure>
                <div className='card_item_info'>
                  <div className='card_item_text'>
                    <h5>Tuotenimi</h5>
                    <p>€</p>
                  </div>
                  <button className='btn' type='button' 
                    onClick={e => addToCart(product)}> Lisää ostoskoriin
                  </button>
                </div>
              </Link>
            </div>
            <div className='card_item'>
              <Link className='card_item_link'>
                <figure className='card_item_pic-wrap'>
                  <img className='card_item_img'
                    src= {URL + 'images/kahvi12.jpg'}  alt={product?.name}
                  />
                </figure>
                <div className='card_item_info'>
                  <div className='card_item_text'>
                    <h5>Tuotenimi</h5>
                    <p>€</p>
                  </div>
                  <button className='btn' type='button' 
                    onClick={e => addToCart(product)}> Lisää ostoskoriin
                  </button>
                </div>
              </Link>
            </div>
            <div className='card_item'>
              <Link className='card_item_link'>
                <figure className='card_item_pic-wrap'>
                  <img className='card_item_img'
                    src= {URL + 'images/kahvi12.jpg'}  alt={product?.name}
                  />
                </figure>
                <div className='card_item_info'>
                  <div className='card_item_text'>
                    <h5>Tuotenimi</h5>
                    <p>€</p>
                  </div>
                  <button className='btn' type='button' 
                    onClick={e => addToCart(product)}> Lisää ostoskoriin
                  </button>
                </div>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div> 
    </>
  );
}

export default TeaCards;