import React from 'react';
import InputItems from '../InputItem/InputItem.js';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer.js';
import styles from './App.module.css';

class App extends React.Component {
	render () {
		const items = [
  	{
  		value: 'Написать Приложение',
  		isDone: false
  	},
  	{
  	  value: 'Прописать props',
  		isDone: true
  	},
  	{
  		value: 'Закончить обучение',
  		isDone: false
  	}
  ];

  return (
  	<div className={styles.wrap}>
  		<div className={styles.main}>
	  	  <h1 className={styles.title}>Список важных дел:</h1>
	      <InputItems />
	      <ItemList items={items} />
	      <Footer count={2} />
	    </div>
    </div>);
	}
};

  

export default App;

