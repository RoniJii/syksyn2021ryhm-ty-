import React from 'react';
import './productcards.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = "http://localhost/syksynprojekti2021/";

 export default function StuffCards({url, category, addToCart}) {
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
      <h1 className='stuff'>Muut tuotteemme</h1>
      <div className='cards'>
        <h3 className='teksti1'>Valikoimastamme löydät kahvin ja teen valmistukseen tarvittavia välineitä!</h3>
        <div className='cards_container'>
          <div className='card_wrapper'>
            <ul className='card_items'>
              {products.map(product => (
                <div key={product.id}>
                  <Link className='card_item_link'
                    to={{
                      pathname: '/product',
                      state: {
                        id: product.id,
                        name: product.name,
                      }
                    }}>
                  </Link>
                  <div className='card_item'>
                    <Link to='/product' className='card_item_link'>
                      <figure className='card_item_pic-wrap'>
                        <img className='card_item_img' src={URL + 'images/' + product.image} alt={product?.name}/>
                      </figure>
                      <div className='card_item_info'>
                        <div className='card_item_text'>
                          <h5>{product.name} </h5>
                          <p>{product.price} €</p>
                        </div>
                        <Link>
                          <button className='btn' type='button' 
                            onClick={e => addToCart(product)}>Lisää ostoskoriin
                          </button>
                        </Link>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}  
            </ul>
          </div>
        </div>
      </div>        
    </>
  );
}