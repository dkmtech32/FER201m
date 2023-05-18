
import './App.css';
import Navigation from './components/Navigation';
import './Nav.css';
import './Films.css';
import Footer from './components/Footer';
import './components/Footer.css';
import '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import Main from './components/Main';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Main/>
      <Footer />
    </div>
  );
}

export default App;
