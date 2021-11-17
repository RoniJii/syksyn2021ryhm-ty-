import React from 'react';
import '../../App.css';


<<<<<<< HEAD
export default function Products() {
    return (
        <h1 className='products'>Tuotteemme</h1>
    ); 
=======
export default function Products({product,addToCart}) {
    return (
<div style={{'padding-top': '100px'}}>
{product?.name}
<button className='btn btn-dark' type='button' onClick={e => addToCart(product)}>Add</button>
<p>Our products</p>
</div>


    )
>>>>>>> aff4af00d29bc713dc8de0da2f48a1af25d6d1f6
}