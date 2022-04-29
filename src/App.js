import { Route, Routes } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import "aos/dist/aos.css"
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import { useEffect } from 'react';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import { Toaster } from 'react-hot-toast';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <Toaster></Toaster>
      <NavBar></NavBar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
