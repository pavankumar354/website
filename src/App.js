import React from "react";
import {Route,Routes} from "react-router-dom"
import Home from "./components/Home/index.js"
import Aboutus from "./components/Pages/Aboutus/index.js";
import Navbar from "./Navbar.js";
import Industries from "./components/Pages/Industries/index.js";
import Services from "./components/Pages/Services/index.js";
import Footer from "./Footer.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}
        />
        <Route path="/aboutus" element={ <Aboutus/>}
        />
        <Route path="/services" element={<Services />}
        />
        <Route path="/industries" element={<Industries />}
        />
          </Routes>
      <Footer/>
    </div>
  );
}

export default App;
