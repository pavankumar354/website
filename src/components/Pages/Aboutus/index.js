import servs from "./1.jpg"
import './index.css';

const Aboutus=()=> {
  
 
  return (
    <div className="us-container">
        <img src={servs} alt="services" className='us'/>
        <div className="usdiv">
        <h2 className='ushead'>About US</h2></div>
    </div>
  );
}

export default Aboutus;
