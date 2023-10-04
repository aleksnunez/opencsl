import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://github.com/aleksnunez"
        >
          Project GitHub Page
        </a>
      </header>
    </div>
  );
}

export default App;
