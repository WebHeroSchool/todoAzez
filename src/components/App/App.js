import React from 'react';
import InputItems from '../InputItem/InputItem.js';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer.js';
import './App.css';

const App = () =>{
  const items = [
  	{
  		value: 'Написать Приложение'
  	},
  	{
  	  value: 'Прописать props'
  	},
  	{
  		value: 'Закончить обучение'
  	}
  ];

  return (
  	<div className='wrap'>
  	  <h1 className='wrap__title'>О_О Полное удивление моим делам</h1>
      <button className='wrap__button'>Жмякай</button>
      <InputItems />
      <ItemList items={items} />
      <Footer count={33} />
    </div>);
};

export default App;

