import servs from "./1.jpg"
import './index.css';

const Industries=()=> {
  
 
  return (
    <div className="indus-container">
        <img src={servs} alt="services" className='indus'/>
        <div className="indusdiv">
        <h2 className='indushead'>Our Industries</h2></div>
    </div>
  );
}

export default Industries;
