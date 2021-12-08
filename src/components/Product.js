import React from 'react';

const URL = "http://localhost/syksynprojekti2021/";

export default function Product({product,addToCart}) {
    
    return (
        <div style={{'padding-top': '100px'}}>
            {product?.name}
            <figure>
                {/* <img src={URL + 'images/' + product.image} alt={product.name}/> */}
            </figure>
            <button className='btn' type='button' 
                onClick={e => addToCart(product)}>Lisää ostoskoriin
            </button>
        </div>
    )
}

