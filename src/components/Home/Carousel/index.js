import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import slide1 from "./1.jpg"
import slide2 from "./2.jpg"
import slide3 from "./3.jpg"
import left from "./left.png"
import right from "./right.png"
import "./index.css"

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
};

const items = [
    <div className="item" data-value="1"><img src={slide1} alt="source" className='images'/><h1 className='carouhead'>ksrfgzmc</h1></div>,
    <div className="item" data-value="2"><img src={slide2} alt="source" className='images'/><h1 className='carouhead'>ksrfgzmc</h1></div>,
    <div className="item" data-value="3"><img src={slide3} alt="source" className='images'/><h1 className='carouhead'>ksrfgzmc</h1></div>,
    <div className="item" data-value="4"><img src={slide1} alt="source" className='images'/><h1 className='carouhead'>ksrfgzmc</h1></div>,
    <div className="item" data-value="5"><img src={slide2} alt="source" className='images'/><h1 className='carouhead'>ksrfgzmc</h1></div>,
];

const handlePrevClick = (index) => {
  console.log("Previous arrow clicked");
  console.log("Current index is", index);
  // You can add more logic here
};

// Define a custom function for the next arrow click
const handleNextClick = (index) => {
  console.log("Next arrow clicked");
  console.log("Current index is", index);
  // You can add more logic here
};

const Carousel = () => (
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
            <div className="arrow-left"> 
                <img src={left} alt="arrows" className="arrows"/> 
            </div>
        )}
        renderNextButton={() => ( // add this prop
            <div className="arrow-right"> 
                <img src={right} alt="arrows" className="arrows"/> 
            </div>
        )}
        onPrevItemChange={handlePrevClick} // add this prop
        onNextItemChange={handleNextClick}
    />
);

export default Carousel;