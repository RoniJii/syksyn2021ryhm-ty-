import React from 'react';
import '../../App.css';


export default function Products(product) {
    return (
<div style={{'padding-top': '100px'}}>
{product?.name}

</div>


    )
}