import "./Navbar.css"
import React, {  useState,useEffect} from 'react';
import log from "./logo.png"
 import log1 from "./logo1.png"

const Navbar=()=> {
   
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [isNavScrolled, setIsNavScrolled] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsNavScrolled(true);
        } else {
          setIsNavScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
      <nav className={`navigation ${isNavScrolled ? 'scrolled' : ''}`}>
        <a href="/" className="brand-name">
        <img src={log} alt="logo" className="logo" />
        </a>
        <a href="/" className="brand-name1">
        <img src={log1} alt="logo" className="logo" />
        </a>
        <button className="hamburger" onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }} title="Toggle Navigation">
        
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
          <ul>
            <li>
              <a href="/services">Services<span className="submenu-arrow">&#9660;</span></a>
              
            </li>
            <li>
              <a href="/industries">Industries<span className="submenu-arrow">&#9660;</span></a>
            </li>
            <li>
              <a href="/casestudies">Case Studies<span className="submenu-arrow">&#9660;</span></a>
            </li>
            <li>
              <a href="/insights">Insights</a>
            </li>
            <li>
              <a href="/aboutus">About US</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            
          </ul>
          
        </div>
        <a href="/contactus"><div className="buttonnav">Contact US</div></a>
      </nav>
    );
  }
  export default Navbar;