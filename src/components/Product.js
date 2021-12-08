import React from 'react';
import { Card } from 'react-bootstrap';

const URL = "http://localhost/syksynprojekti2021/";

export default function Product({product,addToCart}) {
    
    return (
        <div style={{'padding-top': '100px'}}>
            <Card style={{ width: '40rem' }}>
                {/* <Card.Img variant="top" src={URL + 'images/' + product.image} alt={product.name} /> */}
                <Card.Body>
                    <Card.Title>{product?.name}</Card.Title>
                    <Card.Text>
                    <p>{product?.price} €</p>
                    <button className='btn' type='button' 
                        onClick={e => addToCart(product)}>Lisää ostoskoriin
                    </button>
                    </Card.Text>  
                </Card.Body>
            </Card>
        </div>
    )
}

