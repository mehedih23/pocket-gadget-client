import { Route, Routes } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import "aos/dist/aos.css"
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import { useEffect, useState } from 'react';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import { Toaster } from 'react-hot-toast';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import ManageInventories from './Components/ManageInventories/ManageInventories';
import AddItem from './Components/AddItem/AddItem';
import MyItems from './Components/MyItems/MyItems';
import Blogs from './Components/Blogs/Blogs';
import NotFound from './Components/NotFound/NotFound';
import ResetPass from './Components/ResetPass/ResetPass';
import { ClipLoader } from 'react-spinners';


function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      {
        loading ?
          <div className='vh-100 d-flex justify-content-center align-items-center'>
            <ClipLoader loading={loading} size={150} />
          </div>
          :
          <>
            <Toaster></Toaster>
            <NavBar></NavBar>

            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/home' element={<Home></Home>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/signup' element={<Signup></Signup>}></Route>
              <Route path='/inventory/:id' element={
                <RequireAuth>
                  <ProductDetails></ProductDetails>
                </RequireAuth>
              }></Route>
              <Route path='/manage-inventories' element={
                <RequireAuth>
                  <ManageInventories></ManageInventories>
                </RequireAuth>
              }></Route>
              <Route path='/additem' element={
                <RequireAuth>
                  <AddItem></AddItem>
                </RequireAuth>
              }></Route>
              <Route path='/my-items' element={
                <RequireAuth>
                  <MyItems></MyItems>
                </RequireAuth>
              }></Route>
              <Route path='blogs' element={<Blogs></Blogs>}></Route>
              <Route path='reset-pass' element={<ResetPass></ResetPass>}></Route>
              <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer></Footer>
          </>
      }
    </div>
  );
}

export default App;
