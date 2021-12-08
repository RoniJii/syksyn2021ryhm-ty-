import React from 'react';

export default function Product({product,addToCart}) {
    
    return (
        <div style={{'padding-top': '100px'}}>
            {product?.name}
            <button className='btn' type='button' 
                onClick={e => addToCart(product)}>Lisää ostoskoriin
            </button>
        </div>
    )
}

