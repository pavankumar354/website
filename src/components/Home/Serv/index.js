import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import React, {  useState} from 'react';
import './index.css';

import img1 from "./Advanced Analytics.png"
import img2 from "./Cloud.png"
import img3 from "./Consulting.png"
import img4 from "./Data Engineering.png"
import img5 from "./Data management.png"
import img6 from "./Digital Operations.png"
import img7 from "./Advanced Analytics.png"
import img8 from "./Industry 4.0.png"
import img9 from "./Nextzen services.png"
import img10 from "./Process Automation.png"
import img11 from "./Quality Assurance.png"
import img12 from "./User Experience.png"
import img13 from "./Cybersecurity.png"
import left from "./left.png"
import right from "./right.png"

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };
  
  

const Serv=()=>{
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        <div className="item" data-value="1"><img src={img1} alt="source" className='images'/><h1 className='carouhead'>Artificial Intelligence</h1></div>,
        <div className="item" data-value="2"><img src={img2} alt="source" className='images'/><h1 className='carouhead'>Cloud</h1></div>,
        <div className="item" data-value="3"><img src={img3} alt="source" className='images'/><h1 className='carouhead'>Consulting</h1></div>,
        <div className="item" data-value="4"><img src={img4} alt="source" className='images'/><h1 className='carouhead'>Data Engineering</h1></div>,
        <div className="item" data-value="5"><img src={img5} alt="source" className='images'/><h1 className='carouhead'>Data Management</h1></div>,
        <div className="item" data-value="1"><img src={img6} alt="source" className='images'/><h1 className='carouhead'>Digital Operations</h1></div>,
        <div className="item" data-value="2"><img src={img7} alt="source" className='images'/><h1 className='carouhead'>Advanced analytics</h1></div>,
        <div className="item" data-value="3"><img src={img8} alt="source" className='images'/><h1 className='carouhead'>Industry 4.0</h1></div>,
        <div className="item" data-value="4"><img src={img9} alt="source" className='images'/><h1 className='carouhead'>Nextzen Services</h1></div>,
        <div className="item" data-value="5"><img src={img10} alt="source" className='images'/><h1 className='carouhead'>Process Automation</h1></div>,
        <div className="item" data-value="1"><img src={img11} alt="source" className='images'/><h1 className='carouhead'>Quality Assurance</h1></div>,
        <div className="item" data-value="2"><img src={img12} alt="source" className='images'/><h1 className='carouhead'>User Experience</h1></div>,
        <div className="item" data-value="3"><img src={img13} alt="source" className='images'/><h1 className='carouhead'>Cybersecurity</h1></div>,
        
      ];
    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
      };
    
      const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
      };
    return (
        <div className="carousel-container"> 
      <h2 className='carou-head'>What We Do</h2>
    <AliceCarousel
        mouseTracking
        animationDuration={1000}
        items={items}
        responsive={responsive}
        controlsStrategy="responsive"
        autoPlay={true}
        
        infinite={true}
        
        renderPrevButton={() => null}
        renderNextButton={() => null}
        onPrevItemChange={handlePrevClick} // add this prop
        onNextItemChange={handleNextClick}
    />
    
    <div className="arrow-left" onClick={handlePrevClick}>
        <img src={left} alt="arrows" className="arrows" />
      </div>
      <div className="arrow-right" onClick={handleNextClick}>
        <img src={right} alt="arrows" className="arrows" />
      </div>
    </div>
    )
}
export default Serv;