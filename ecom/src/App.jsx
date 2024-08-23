import React from 'react';
import MainLayout from './Components/MainLayout/MainLayout';
import UserDetails from './Components/UserDetails/UserDetails'
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (

    <>

      <Routes>
        <Route path='/' element={<MainLayout />} />
        <Route path='/userDetails' element={<UserDetails />} />
      </Routes>

      <Footer />
    </>



  )
}

export default App