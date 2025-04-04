import './App.css'
import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
//  A routeokhoz importálni kell a pagesből az oldalakat
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Profile from './pages/Profile';

function App() {


  return (
    //  ROUTER készítése
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/rolunk" element={<AboutUs/>}/>
        <Route path="/profil" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App
