import About from './About';
import Serv from './Serv';
import React, {  useEffect, useRef } from 'react';
import vid1 from "./1.mp4"
import './index.css';


const Home=()=> {
  
  const videos = [vid1];
  const videoRef = useRef(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  
  
  return (
    <>
    <div className="App">
      <div className="video-background">
      <video ref={videoRef} autoPlay muted loop playsInline>
        {videos.map((video, index) => (
          <source key={index} src={video} type="video/mp4" />
        ))}
      </video>
      <div className="submenu">
        <h1>HARNESS THE SYNERGY OF<br/> DATA, ANALYTICS,<br/> AND AI</h1>
          <button type="button" className="button1">Let's Connect</button>
      </div>
    </div>
    </div>
    <Serv/>
   <About/>
   
    </>
  );
}

export default Home;
