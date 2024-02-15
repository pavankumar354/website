import servs from "./1.jpg"
import './index.css';

const CaseStudies=()=> {
  
 
  return (
    <div className="case-container">
        <img src={servs} alt="services" className='case'/>
        <div className="casediv">
        <h2 className='casehead'>Case Studies</h2></div>
    </div>
  );
}

export default  CaseStudies;
