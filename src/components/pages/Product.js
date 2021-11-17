import React from 'react';
import '../../App.css';


export default function Product(product) {
    return (
<div style={{'padding-top': '100px'}}>
{product?.name}

</div>


    )
}