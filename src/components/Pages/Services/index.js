import servs from "./standard-quality-control-concept-m.jpg"
import './index.css';

const Services=()=> {
  
 
  return (
    <div className="serv-container">
        <img src={servs} alt="services" className='serv'/>
        <div className="serdiv">
        <h2 className='serhead'>Our Services</h2></div>
    </div>
  );
}

export default Services;
