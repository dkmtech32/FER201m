import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Players from './components/Players';
import './Nav.css';
import './Player.css';
import Footer from './components/Footer';
import './components/Footer.css';
import '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Players/>
      <Footer/>
    </div>
  );
}

export default App;
