import React from 'react';
import InputItems from '../InputItem/InputItem.js';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer.js';

const todoItem = 'Написать Приложение';
const App = () => (<div><h1>О_О</h1>
  <button>Жмякай</button>
  <InputItems />
  <ItemList todoItem={todoItem} />
  <Footer count={3} />
 </div>);

export default App;

