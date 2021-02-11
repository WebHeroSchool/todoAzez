import logo from './logo.svg';
import './App.css';
import {count, length} from './numbers.js';

const login = false;
const hyphen = ' - ';
const a = 2;
const b = 35;
const variables = 'count * length =';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
        {variables}
        {count*length}
        </p>
        <button style={{
          fontSize: 26 + 30
        }}>ВХОД
        </button>
        <p>
        {count}
        {'19'}
        {a*b}
        {hyphen}
        {login ? 'Добро пожаловать!' : 'Не правильный пароль'}
        {undefined}
        {null}
        {false}
        {true}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
