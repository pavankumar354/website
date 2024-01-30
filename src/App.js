import React from 'react';
import Footer from './components/Footer/index.js';
import {Route, Routes } from 'react-router-dom'
import Home from "./components/Home/index.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
    
  )
}

export default App;
