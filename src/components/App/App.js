import React from 'react';
import InputItems from '../InputItem/InputItem.js';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer.js';
import styles from './App.module.css';

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
  	<div className={styles.wrap}>
  	  <h1 className={styles.title}>О_О Полное удивление моим делам</h1>
      <button className={styles.button}>Жмякай</button>
      <InputItems />
      <ItemList items={items} />
      <Footer count={33} />
    </div>);
};

export default App;

