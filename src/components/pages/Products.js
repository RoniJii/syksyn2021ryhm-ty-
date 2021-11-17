import React from 'react';
import '../../App.css';


export default function Products({product,addToCart}) {
    return (
<div style={{'padding-top': '100px'}}>
{product?.name}
<button className='btn btn-dark' type='button' onClick={e => addToCart(product)}>Add</button>
<p>Our products</p>
</div>


    )
}