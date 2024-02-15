import servs from "./1.jpg"
import './index.css';

const Insights=()=> {
  
 
  return (
    <div className="insights-container">
        <img src={servs} alt="services" className='insights'/>
        <div className="insightsdiv">
        <h2 className='insightshead'>Insights</h2></div>
    </div>
  );
}

export default Insights;
