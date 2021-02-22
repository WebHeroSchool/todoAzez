import React from 'react';
import InputItems from '../InputItem/InputItem.js';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer.js';
import styles from './App.module.css';

class App extends React.Component {
	state = {
		items: [
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
	  ]
	};

	onClickDone = (isDone) => console.log(isDone);

	render () {
		return (
  	<div className={styles.wrap}>
  		<div className={styles.main}>
	  	  <h1 className={styles.title}>Список важных дел:</h1>
	      <InputItems />
	      <ItemList items={this.state.items} onClickDone={this.onClickDone} />
	      <Footer count={2} />
	    </div>
    </div>);
	}
};

  

export default App;

