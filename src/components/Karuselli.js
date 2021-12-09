import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';
import Karuselli1 from './images/karuselli1.png';
import Karuselli2 from './images/karuselli2.png';
import Karuselli3 from './images/karuselli3.png';

export default function Karuselli() {
    return (
        <div className='carousel'>
            <Carousel>
                <Carousel.Item>
                    <img height={500}
                    className="d-block w-100"
                    src={Karuselli1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img height={500}
                    className="d-block w-100"
                    src={Karuselli2}
                    alt="Second slide"
                    />
                <Carousel.Caption>
                    <h3> Joulun sesonkituotteet ovat nyt saapuneet!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height={500}
                    className="d-block w-100"
                    src={Karuselli3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Haluatko jauhaa omat papusi? Meiltä löydät papujen jauhamiseen tarvittavat laitteet!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
