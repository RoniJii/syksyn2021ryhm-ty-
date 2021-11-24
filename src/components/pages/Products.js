import React from 'react';
import '../../App.css';
/* import kahvi1 from '../images/Tuotekuvat/Kahvi1.jpg';
import kahvi2 from '../images/Tuotekuvat/Kahvi2.jpg';
import kahvi3 from '../images/Tuotekuvat/Kahvi3.jpg';
import kahvi4 from '../images/Tuotekuvat/Kahvi4.jpg';
import kahvi5 from '../images/Tuotekuvat/Kahvi5.jpg';
import tee1 from '../images/Tuotekuvat/Tee1.jpg';
import tee2 from '../images/Tuotekuvat/Tee2.jpg';
import tee3 from '../images/Tuotekuvat/Tee3.jpg';
import tee4 from '../images/Tuotekuvat/Tee4.jpg';
import tee5 from '../images/Tuotekuvat/Tee5.jpg';
import tee6 from '../images/Tuotekuvat/Tee6.jpg';
import tee7 from '../images/Tuotekuvat/Tee7.jpg';
import kahvimylly1 from '../images/Tuotekuvat/Kahvimylly1.jpg';
import kahvimylly2 from '../images/Tuotekuvat/Kahvimylly2.jpg'; */


const Tuotteet = [
{category: 'Kahvi', price: '10€', stocked: true, name:'Joulukahvi'},
{category: 'Kahvi', price: '12€', stocked: true, name:'Tummapaahto luomukahvi'},
{category: 'Kahvi', price: '9€', stocked: true, name:'Suklaakahvi'},
{category: 'Kahvi', price: '11€', stocked: true, name:'Karamellikahvi'},
{category: 'Kahvi', price: '13€', stocked: true, name:'Appelsiinikahvi'},
{category: 'Tee', price: '5€', stocked: true, name:'Chai'},
{category: 'Tee', price: '3€', stocked: true, name:'Musta tee'},
{category: 'Tee', price: '4€', stocked: true, name:'Kofeiiniton musta tee'},
{category: 'Tee', price: '3€', stocked: true, name:'Vihreä tee'},
{category: 'Tee', price: '5€', stocked: true, name:'Rooibos'},
{category: 'Tee', price: '5€', stocked: true, name:'Inkivääri vihreä tee'},
{category: 'Tee', price: '6€', stocked: true, name:'Sininen terälehti tee'},
{category: 'Muut', price: '20€', stocked: true, name:'Tavallinen kahvimylly'},
{category: 'Muut', price: '25€', stocked: true, name:'Sähkökahvimylly'}
];


export default function Products({product,url,addToCart}) {
    return (
        
            <>
            <h1 className='coffee'>KAFFIA - COFFEE AND MORE</h1>
            <div>
                {product?.name}
                <button className='btn btn-dark' type='button' onClick={e => addToCart(product)}>Add</button>
            </div>
            </>
        );


}