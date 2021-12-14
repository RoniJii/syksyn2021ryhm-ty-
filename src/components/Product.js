import React from 'react';

const URL = 'http://localhost/syksynprojekti2021';

export default function Product({product,addToCart}) {
    
    return (
        <div style={{'paddingTop': '100px'}}>
            <div>
                {/* <figure>
                    <img src={URL + 'images/' + product.image} alt={product?.name}/>
                </figure> */}
            </div>
            <div>
                <p>{product?.name}</p>
                <p>{product?.price} €</p>
                <button className='btn' type='button' 
                    onClick={e => addToCart(product)}>Lisää ostoskoriin
                </button>
            </div>
        </div>
    )
}

