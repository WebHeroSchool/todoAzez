import React from 'react';
import Item from '../Item/items';

const ItemList = ({ todoItem }) => (<ul>
	<li><Item todoItem={todoItem} /></li>
	<li><Item todoItem={'Прописать props-ы'} /></li>
	<li><Item todoItem={'Закончить обучение'} /></li>
</ul>);

export default ItemList;