import React from 'react';
import './productcards.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = "http://localhost/syksynprojekti2021/";

function StuffCards({url, category, addToCart}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category !== null) {
        const address = ('http://localhost/syksynprojekti2021/products/getproducts.php/' + category.id);
        console.log(address)
        axios.get(address)
        .then((response) => {
            const json = response.data;
            setProducts(json);
        }).catch(error =>{
            if (error.response === undefined) {
                alert(error);
            } else {
                alert(error.response.data.error);
            }
        })
    }
  }, [category, url])
  
  return (
    <>
    <h1 className='stuff'>Oheistuotteet</h1>
    {products.map(product => (
                <div key={product.id}>
                    <Link className='card_item_link'
                    to={{
                        pathname: '/',
                        state: {
                        id: product.id,
                        name: product.name
                        }
                    }}>
                    </Link> 
    <div className='cards'>
    <h3 className='teksti1'>Muiden tuotteiden esittelyä</h3>
      <div className='cards_container'>
        <div className='card_wrapper'>
          <ul className='card_items'>
            <div className='card_item'>
              <Link className='card_item_link'>
                <figure className='card_item_pic-wrap'>
                  <img className='card_item_img'
                    src= {URL + 'images/Kahvimylly1.jpg'}  alt={product?.name}
                  />
                </figure>
                <div className='card_item_info'>
                  <div className='card_item_text'>
                    <h5>{product.name} </h5>
                    <p>{product.price} €</p>
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
                    src= {URL + 'images/Kahvimylly2.jpg'}  alt={product?.name}
                  />
                </figure>
                <div className='card_item_info'>
                  <div className='card_item_text'>
                    <h5>{product.name} </h5>
                    <p>{product.price} €</p>
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
                    src= {URL + 'images/kahvimuki.jpg'}  alt={product?.name}
                  />
                </figure>
                <div className='card_item_info'>
                  <div className='card_item_text'>
                    <h5>{product.name} </h5>
                    <p>{product.price} €</p>
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
                    src= {URL + 'images/teekannu.jpg'}  alt={product?.name}
                  />
                </figure>
                <div className='card_item_info'>
                  <div className='card_item_text'>
                    <h5>{product.name} </h5>
                    <p>{product.price} €</p>
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
                    src= {URL + 'images/teekannu1.jpg'}  alt={product?.name}
                  />
                </figure>
                <div className='card_item_info'>
                  <div className='card_item_text'>
                    <h5>{product.name} </h5>
                    <p>{product.price} €</p>
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
                    src= {URL + 'images/teekuppi.jpg'}  alt={product?.name}
                  />
                </figure>
                <div className='card_item_info'>
                  <div className='card_item_text'>
                    <h5>{product.name} </h5>
                    <p>{product.price} €</p>
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
                    src= {URL + 'images/teekuppi1.jpg'}  alt={product?.name}
                  />
                </figure>
                <div className='card_item_info'>
                  <div className='card_item_text'>
                    <h5>{product.name} </h5>
                    <p>{product.price} €</p>
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
                    <h5>{product.name} </h5>
                    <p>{product.price} €</p>
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
    </div>
    ))}  
    </>
  );
}

export default StuffCards;