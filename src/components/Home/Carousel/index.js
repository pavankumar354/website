import React,{useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import img1 from "./Artificial Intelligence.png"
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
import "./index.css"

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
};

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


const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };
return (
    <AliceCarousel
        mouseTracking
        animationDuration={1000}
        items={items}
        responsive={responsive}
        controlsStrategy="responsive"
        autoPlay="true"
        autoPlayStrategy='none'
        infinite="true"
        
        renderPrevButton={() => ( // add this prop
            <div className="arrow-left" > 
                <img src={left} alt="arrows" className="arrows" onClick={handlePrevClick}/> 
            </div>
        )}
        renderNextButton={() => ( // add this prop
            <div className="arrow-right" > 
                <img src={right} alt="arrows" className="arrows" onClick={handleNextClick}/> 
            </div>
        )}
        onPrevItemChange={handlePrevClick} // add this prop
        onNextItemChange={handleNextClick}
    />
)
};

export default Carousel;