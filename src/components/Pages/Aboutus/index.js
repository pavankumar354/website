import servs from "./1.jpg"
import './index.css';

const Aboutus=()=> {
  
 
  return (
    <div>
        <img src={servs} alt="services" className='serv'/>
        <div className="serdiv">
        <h2 className='serhead'>About US</h2></div>
    </div>
  );
}

export default Aboutus;
