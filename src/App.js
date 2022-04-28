import { Route, Routes } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import "aos/dist/aos.css"
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <NavBar></NavBar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>

    </div>
  );
}

export default App;
