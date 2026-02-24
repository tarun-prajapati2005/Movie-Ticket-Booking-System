import React from "react";
import Navbar from "./components/Nevbar";
import { Routes, Route, useLocation, } from "react-router-dom";
import Home from "./pages/home";
import Favorite from "./pages/Favorite";
import Moviedetails from "./pages/Moviedetails";
import Seatlayout from "./pages/Seatlayout";
import Movie from "./pages/Movie";
import MyBookings from "./pages/MyBookings";
import { Toaster } from 'react-hot-toast';
import Footer from "./components/Footer";


const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin');

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movie />} />
        <Route path='/movies/:id' element={<Moviedetails />} />
        <Route path='/movies/:id/:date' element={<Seatlayout />} />
        <Route path='/mybooking' element={<MyBookings />} />
        <Route path='/favorite' element={<Favorite />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
