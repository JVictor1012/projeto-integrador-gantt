import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Olá Mundo!
        </p>
        <a
          className="App-link"
          href="https://chess.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Não clique aqui!
        </a>
      </header>
    </div>
  );
}

export default App;
