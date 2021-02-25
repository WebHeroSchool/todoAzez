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
	  		id: 1
	  	},
	  	{
	  	  value: 'Прописать props',
	  		id: 2
	  	},
	  	{
	  		value: 'Закончить обучение',
	  		id: 3
	  	}
	  ],
	  count: 3
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
		const newItemList = this.state.items.filter(item => {
			const newItem = {...item};
			if (item.id !== id) {
				return newItem;
			}
		})
		this.setState({items: newItemList });
		this.setState(state => ({count:state.count - 1}));
	};

	onClickAdd = value => this.setState(state => ({
		items: [
			...state.items,
			{
				value ,
				id: state.count + 1
			}
		],
		count:state.count + 1
	}));

	render () {
		return (
	  	<div className={styles.wrap}>
	  		<div className={styles.main}>
		  	  <h1 className={styles.title}>Список важных дел:</h1>
		      <InputItems onClickAdd={this.onClickAdd} />
		      <ItemList items={this.state.items} onClickDone={this.onClickDone} onClickDelete={this.onClickDelete} />
		      <Footer count={this.state.count} />
		    </div>
	    </div>
	  );
	}
};

  

export default App;

