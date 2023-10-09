import './App.css';
import CodeEditor from './components/editor/CodeEditor';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <CodeEditor />
      <header className="App-header">
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
