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
	  		isDone: false,
	  		id: 1
	  	},
	  	{
	  	  value: 'Прописать props',
	  		isDone: false,
	  		id: 2
	  	},
	  	{
	  		value: 'Закончить обучение',
	  		isDone: false,
	  		id: 3
	  	}
	  ]
	};

	onClickDone = id => {
		const newItemList = this.state.items.map(item => {
			const newItem = { ...item};
			if (item.id ===id) {
					newItem.isDone =! item.isDone
			}
			return newItem;
		});

		this.setState({ items: newItemList});

	};

	onClickDelete = id => {
		const newItemList = this.state.items.filter(item=> {
			const newItem = {...item};
			if (item.id !== id) {
				return newItem;
			}
		})
		this.setState({ items: newItemList});
	};

	render () {
		return (
  	<div className={styles.wrap}>
  		<div className={styles.main}>
	  	  <h1 className={styles.title}>Список важных дел:</h1>
	      <InputItems />
	      <ItemList items={this.state.items} onClickDone={this.onClickDone} onClickDelete={this.onClickDelete} />
	      <Footer count={2} />
	    </div>
    </div>);
	}
};

  

export default App;

