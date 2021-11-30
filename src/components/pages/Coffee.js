import React from 'react';
import '../../App.css';
import CoffeeCards from '../Coffeecards';

export default function Coffee() {
    return (
        <>
        <h1 className='coffee'>Kahvituotteet</h1>
        <CoffeeCards/>
        </>
    );
}