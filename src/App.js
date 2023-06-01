
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
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
