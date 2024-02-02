import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import log from "./logo.png"
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer class="footer">
    <div class="container">
     <div class="row">
     <div class="footer-col">
         
         <img src={log} alt="int" />
         <p className='para'>NeuzenAI is a leader in the real od Data, Analytics, and AI, dedicated to transforming the way businesses interact with data.</p>
         <div class="social-links">
           <a href="/"><i class="fab fa-facebook-f"><FaFacebook/></i></a>
           <a href="/"><i class="fab fa-twitter"><FaTwitter/></i></a>
           <a href="/"><i class="fab fa-instagram"><FaInstagram/></i></a>
           <a href="/"><i class="fab fa-linkedin-in"><FaLinkedin/></i></a>
         </div>
       </div>
       <div class="footer-col">
         <h4>Quick Links</h4>
         <ul>
           <li><a href="/"><FaRegArrowAltCircleRight/>Home</a></li>
           <li><a href="/"><FaRegArrowAltCircleRight/>About Us</a></li>
           <li><a href="/"><FaRegArrowAltCircleRight/>Services</a></li>
           <li><a href="/"><FaRegArrowAltCircleRight/>Industries</a></li>
         </ul>
       </div>
       <div class="footer-col">
         <h4>Our Services</h4>
         <ul>
           <li><a href="/"><FaRegArrowAltCircleRight/>Cyber Security</a></li>
           <li><a href="/"><FaRegArrowAltCircleRight/>Industry 4.0</a></li>
           <li><a href="/"><FaRegArrowAltCircleRight/>Artificial Intelligence</a></li>
           <li><a href="/"><FaRegArrowAltCircleRight/>Data Engineering</a></li>
           
         </ul>
       </div>
       <div class="footer-col">
         <h4>Address & Contact</h4>
         <p className='para'>WeWork Krishe Emerald<br />
                Laxmi Cyber City<br />
                Hitec City, Kondapur<br />
                Hyderabad, TS 500081<br />
                </p>
				<p className='para'>Call Us : +91-8885257422</p>
       </div>
       
     </div>
    </div>
 </footer>
  );
}

export default Footer;

