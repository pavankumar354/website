import servs from "./1.png"
import './index.css';

const ContactUS=()=> {
  
 
  return (
    <div className="contact-container">
        <img src={servs} alt="services" className='contact'/>
        <div className="contactdiv">
        <h2 className='contacthead'>Contact US</h2></div>
    </div>
  );
}

export default ContactUS;
