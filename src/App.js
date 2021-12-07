import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar.jsx"
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Card/>
    </div>
  );
}

export default App;
