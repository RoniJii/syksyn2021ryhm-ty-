import React from 'react';
import './cards.css';
import CardItem from './CardItem';
import Kuva1 from './images/kuva1.png';
import Kuva2 from './images/kuva2.png';
import Kuva5 from './images/kuva5.jpg';
import Kuva3 from './images/Tuotekuvat/Kahvi3.jpg';
import Kuva10 from './images/kuva10.png';

function Cards() {
  return (
    <div className='cards'>
      <h3 className="teksti1">Löydät monipuolisesta valikoimastamme erilaisia kahveja, teetä ja oheistuotteita.</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Kuva3}
              text='Kahvipapuja halavalla'
              label='TARJOUS!'
              path='/Kahvi'
            />
            <CardItem
              src={Kuva5}
              text='Jouluiset kahvit ja teet ovat saapuneet valikoimaamme!'
              label='UUTTA!'
              path='/Kahvi'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Kuva1}
              text='Tutustu ja ihastu laadukkaaseen kahvivalikoimaamme!'
              label='KAHVI'
              path='/Kahvi'
            />
            <CardItem
              src={Kuva10}
              text='Tutustu ja ihastu monipuoliseen teevalikoimaamme!'
              label='TEE'
              path='/Tee'
            />
            <CardItem
              src={Kuva2}
              text='Meiltä löydät myös kahvin ja teen valmistukseen tarvittavat välineet!'
              label='MUUT'
              path='/Muut'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;