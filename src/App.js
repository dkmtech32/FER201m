
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Detail from './components/Detail';
import Main from './components/Main';
import News from './components/News';
import AboutUs from './components/AboutUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact';
import Add from './components/Add';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/news' element={<News />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/contact' element={<Contact />}> </Route>
        <Route path='/add' element={<Add />}> </Route>
        <Route path='/dashboard' element={<Dashboard />}> </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
