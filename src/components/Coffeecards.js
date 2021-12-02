import React from 'react'
import './productcards.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
//import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const URL = "http://localhost/syksynprojekti2021/";

export default function Home({url, category, addToCart}) {
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
        <div className='container-fluid' style={{marginTop: '100px'}}>
         <h3>{category?.name}</h3>
        {products.map(product => (
            <div key={product.id} >
                <Link className='card_item_link'
                 to={{
                    pathname: '/',
                    state: {
                      id: product.id,
                      name: product.name,
                    }
                }}
                >
                </Link> 
                <div className='cards'>
                        <h3 className='teksti1'>{product.name}</h3>
                        <div className='cards_container'>
                            <div className='card_wrapper'>
                            <ul className='card_items'>
                                <div className='card_item'>
                                <div className='card_item_link'>
                                    <figure className='card_item_pic-wrap'>
                                        <img src= {URL + 'images/' + product.image}style={{ maxHeight: '150px'} }  alt={product.name}/>
                                    </figure>
                                    <div className='card_item_info'>
                                    <div className='card_item_text'>
                                        <h5></h5>
                                        <p>{product.price} €</p>
                                    </div>
                                    <button className='btn' type='button' onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
                                    </div>
                                </div>
                                </div>
                            </ul>
                            </div>
                        </div>
                      </div>  
                    </div>     
        ))} 
        </div>
    )

    
}





