import React from 'react';
import './cards.css';
import CardItem from './CardItem';
import Kuva1 from './images/kuva1.png';
import Kuva2 from './images/kuva2.png';
import Kuva5 from './images/kuva5.jpg';
import Kuva3 from './images/Tuotekuvat/Kahvi3.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h3>Löydät monipuolisesta valikoimastamme erilaisia kahveja, teetä ja oheistuotteita.</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Kuva3}
              text='Kahvipapuja halavalla'
              label='TARJOUS!'
              path='/'
            />
            <CardItem
              src={Kuva5}
              text='Jouluiset kahvit ja teet ovat saapuneet valikoimaamme!'
              label='UUTTA!'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Kuva1}
              text='Tutustu ja ihastu laadukkaaseen kahvivalikoimaamme!'
              label='KAHVI'
              path='/'
            />
            <CardItem
              src={Kuva2}
              text='Tutustu ja ihastu monipuoliseen teevalikoimaamme!'
              label='TEE'
              path='/'
            />
            <CardItem
              src={Kuva2}
              text='Meiltä löydät myös kahvin ja teen valmistukseen tarvittavat välineet!'
              label='OHEISTUOTTEET'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;