import React from 'react';
import InputItems from '../InputItem/InputItem.js';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer.js';

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
  	<div>
  	  <h1>О_О</h1>
      <button>Жмякай</button>
      <InputItems />
      <ItemList items={items} />
      <Footer count={3} />
    </div>);
};

export default App;

