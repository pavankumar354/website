import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import log from "./logo.png"
import React from 'react';
import './index.css';

const Footer = () => {
    return (
		<footer>
        <div className="footer">
			
            <div className="section">
                <img src={log} alt="images" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit phasellus in nibh elementisque gravida elit eu pulvinar laoreet fusce rhoncus.</p>
                <div className="social-icons">
                    <a href="https://www.facebook.com"><FaFacebook /></a>
                    <a href="https://www.twitter.com"><FaTwitter /></a>
                    <a href="https://www.instagram.com"><FaInstagram /></a>
                    <a href="https://www.linkedin.com"><FaLinkedin /></a>
                </div>
            </div>
            <div className="section">
                <h4 className='head'>Quick Links</h4>
                <ul>
                    {/* Add list items for each link */}
                    <li><span className='icon'><FaRegArrowAltCircleRight /></span>Home</li>
                    <li><span className='icon'><FaRegArrowAltCircleRight /></span>About Us</li>
                    <li><span className='icon'><FaRegArrowAltCircleRight /></span>Home</li>
                    <li><span className='icon'><FaRegArrowAltCircleRight /></span>About Us</li>
                </ul>
            </div>
            <div className="section">
                <h4 className='head'>Our Services</h4>
                <ul>
                    {/* Add list items for each service */}
                    <li><span className='icon'><FaRegArrowAltCircleRight /></span>Cyber Security</li>
                    <li><span className='icon'><FaRegArrowAltCircleRight /></span>Industry 4.0</li>
                    <li><span className='icon'><FaRegArrowAltCircleRight /></span>Home</li>
                    <li><span className='icon'><FaRegArrowAltCircleRight /></span>About Us</li>
                </ul>
            </div>
            <div className="section">
                <h4>Address & Contact</h4>
                <p>WeWork Krishe Emerald<br />
                Laxmi Cyber City<br />
                Hitec City, Kondapur<br />
                Hyderabad, TS 500081<br />
                </p>
				<p>Call Us : +91-8885257422</p>
            </div>
        </div></footer>
    );
}

export default Footer;

