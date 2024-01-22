import log from "./logo.png"
import React, {  useEffect, useRef,useState } from 'react';
import { FiMenu } from "react-icons/fi";
import vid1 from "./1.mp4"
import './index.css';

const Navbar=()=> {
  
  const videos = [vid1];
  const videoRef = useRef(null);

  useEffect(() => {
    const playNextVideo = () => {
      const currentVideoIndex = videos.indexOf(videoRef.current.src);
      const nextVideoIndex = (currentVideoIndex + 1) % videos.length;
      const nextVideo = videos[nextVideoIndex];
      videoRef.current.src = nextVideo;
      videoRef.current.play();
    };

    videoRef.current.addEventListener('ended', playNextVideo);

    // Ensure the video starts playing when the component mounts
    videoRef.current.play();

    return () => {
      videoRef.current.removeEventListener('ended', playNextVideo);
    };
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <div className="App">
      <div className="video-background">
      <video ref={videoRef} autoPlay muted loop playsInline>
        {videos.map((video, index) => (
          <source key={index} src={video} type="video/mp4" />
        ))}
      </video>
    </div>
      <div className="transparent-navbar">
      <div className='header1'>
            <div className="logo1">
                <a href="/"><img src={log} alt="logo"/></a>
            </div>
            <nav>
                <a href="/" className="active">Home</a>
                <a href="/" >Services</a>
                <a href="/" >Industries</a>
                <a href="/" >Case Studies</a>
                <a href="/" >About US</a>
                <a href="/" >Careers</a>
          </nav>
          <div>
            <button type="button" className="button">Contact US</button>
          </div>
        </div>
        <div className='header2'><>
            <div className="mobile-header">
              <div className="container">
                <div className="cont1">
                  <a href="/"><img src={log} className="logo" alt="logo"/></a>
                </div>
                <div className="cont2">
                <button className="toggle-button" onClick={toggleMenu}>
                <FiMenu />
                </button></div>
              </div>
              
              
          </div>
          <div className="down">{isMenuOpen && (
                
            <nav className="mobile-nav">
              <ul>
                <li className="ser">
                  <a href="/aboutus">About Us</a>
                </li >
                <li className="ser">
                  <a href="/services">Services</a>
                </li>
                <li className="ser">
                  <a href="/industries">Industries</a>
                </li>
                <li className="ser">
                  <a href="/careers">Careers</a>
                </li>
                <li className="ser">
                  <a href="/insights">Insights</a>
                </li>
                <li className="ser">
                  <a href="/casestudies">Case Studies</a>
                </li>
              </ul>
            </nav>
          )}</div></>
    </div>
      </div>
      
    </div>
    
    </>
  );
}

export default Navbar;
