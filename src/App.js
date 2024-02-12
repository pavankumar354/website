import React from "react";
import {Route,Routes} from "react-router-dom"
import Home from "./components/Home/index.js"
import Aboutus from "./components/Pages/Aboutus/index.js";
import Navbar from "./Navbar.js";
import Industries from "./components/Pages/Industries/index.js";
import Services from "./components/Pages/Services/index.js";
import Footer from "./Footer.js";
import CaseStudies from "./components/Pages/CaseStudies/index.js";
import Careers from "./components/Pages/Careers/index.js";
import Insights from "./components/Pages/Insights/index.js";
import './App.css';
import ContactUS from "./components/Pages/ContactUS/index.js";

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
        <Route path="/casestudies" element={ <CaseStudies/>}
        />
        <Route path="/insights" element={<Insights/>}
        />
        <Route path="/careers" element={<Careers />}
        />
        <Route path="/contactus" element={<ContactUS />}
        />
          </Routes>
      <Footer/>
    </div>
  );
}

export default App;
