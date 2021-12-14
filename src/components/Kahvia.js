import React from 'react'
import './productcards.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const URL = "http://localhost/syksynprojekti2021/";

export default function Coffeecards({url, category, addToCart}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log(category.name)
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
            <h1 className={category.name}>{category.name}tuotteet</h1>
            <div className='cards'>
                <h3 className='teksti1'>Valikoimastamme löydät paljon erilaisia kahveja. Tutustu ja ihastu!</h3>
                <ul className='card_items'>
                    {products.map(product => (
                        <>
                            <div key={product.id}>
                            <Link 
                                to={{
                                pathname: '/product',
                                state: {
                                    id: product.id,
                                    name: product.name,
                                }
                            }}>
                            </Link>
                                <div className='card_item'>
                                    <div className='card_item_link'>
                                            <Link>
                                                <figure className='card_item_pic-wrap'>
                                                    <img className='card_item_img' src={URL + 'images/' + product.image} alt={product?.name}/>
                                                </figure>
                                            </Link>
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
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}  
                </ul>
            </div>  
        </>
    )
}





