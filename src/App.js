
import './App.css';
import Navigation from './components/Navigation';
import './Nav.css';
import './Player.css';
import Footer from './components/Footer';
import './components/Footer.css';
import '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import Main from './components/Main';
import Players from './components/Players';
import {
  Routes, 
  Route,
} from "react-router-dom";
import Details from './components/Details';

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
          <Route path='/' element={<Players/>}> 
      </Route>
        <Route path='/detail/:id' element={<Details/>}></Route>
        {/* <Route path='/contact' element={<Contact/>}></Route> */}
      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
