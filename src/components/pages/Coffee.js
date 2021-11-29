import React from 'react';
import '../../App.css';
import CoffeeCards from '../CoffeeCards';

export default function Coffee() {
    return (
        <>
        <h1 className='coffee'>Kahvituotteet</h1>
        <CoffeeCards/>
        </>
    );
}