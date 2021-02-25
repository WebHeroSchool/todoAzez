import React, { useState, useEffect } from 'react';
import InputItems from '../InputItem/InputItem.js';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer.js';
import styles from './Todo.module.css';

const Todo = () => {
	const initialState = {
		item: [
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

const [item, setItem] = useState(initialState.item);
const [count, setCount] = useState(initialState.count);

useEffect (() =>  {
	console.log('update');
});

useEffect (() =>  {
	console.log('mount')
}, []);

	const onClickDone = id => {
		const newItems = item.map(item => {
			const newItem = { ...item};
			if (newItem.id === id) {
					newItem.isDone =! item.isDone
			}
			return newItem;
		});

		setItem(newItems)
	};

	const onClickDelete = id => {
		const newItems = item.filter(item => {
			const newItem = {...item};
			if (item.id !== id) {
				return newItem;
			}
		})
		setItem(newItems);
		setCount((count) => count - 1);
	};

	const onClickAdd = value => {
		const newItems = [
			...item,
			{
				value ,
				id: count + 1
			}
		];
		setItem(newItems);
		setCount((count) => count + 1);
	};

	return (
  	<div className={styles.wrap}>
  		<div className={styles.main}>
	  	  <h1 className={styles.title}>Список важных дел:</h1>
	      <InputItems onClickAdd={onClickAdd} />
	      <ItemList items={item} onClickDone={onClickDone} onClickDelete={onClickDelete} />
	      <Footer count={count} />
	    </div>
    </div>
  );
};

export default Todo;
