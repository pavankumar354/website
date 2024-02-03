import React from "react";

import ind1 from "./Automotive.png"
import ind2 from "./Banking & Finance.png"
import ind3 from "./Transportation & logistics.png"
import ind4 from "./creative-business-people-working-on-business-proje-EM25WT3.jpg"
import ind5 from "./Energy.png"
import ind6 from "./Health care & Life.png"
import ind7 from "./Insurance.png"
import ind8 from "./Manufacturing.png"
import ind9 from "./Media & Entertainment.png"
import ind10 from "./Real-Estate.png"
import ind11 from "./Retail & Ecommerce.png"
import ind12 from "./Semi-conductors.png"
import ind13 from "./Supply chain.png"
import "./index.css";

function App() {
  return (
    <div className="aboutcont">
      <div className="left">
        <img src={ind4} alt="Collaborate" />
        <p className="caption">Lets Collaborate and Flourish Unitedly</p>
        
      </div>
      <div className="right">
        <h2 className="title">Industries We Serve</h2>
        <div className="grid">
          <div className="cell">
            <img src={ind1} alt="Automotive" />
            <p className="label">Automotive</p>
          </div>
          <div className="cell">
            <img src={ind2} alt="Banking & Finance" />
            <p className="label">Banking & Finance</p>
          </div>
          <div className="cell">
            <img src={ind5} alt="Energy" />
            <p className="label">Energy</p>
          </div>
          <div className="cell">
            <img src={ind6} alt="Health Care & Life" />
            <p className="label">Health Care & Life</p>
          </div>
          <div className="cell">
            <img src={ind7} alt="Insurance" />
            <p className="label">Insurance</p>
          </div>
          <div className="cell">
            <img src={ind8} alt="Manufacturing" />
            <p className="label">Manufacturing</p>
          </div>
          <div className="cell">
            <img src={ind9} alt="Media & Entertainment" />
            <p className="label">Media & Entertainment</p>
          </div>
          <div className="cell">
            <img src={ind10} alt="Real-Estate" />
            <p className="label">Real-Estate</p>
          </div>
          <div className="cell">
            <img src={ind11} alt="Retail & Ecommerce" />
            <p className="label">Retail & Ecommerce</p>
          </div>
          <div className="cell">
            <img src={ind12} alt="Media & Entertainment" />
            <p className="label">Semi-conductors</p>
          </div>
          <div className="cell">
            <img src={ind13} alt="Real-Estate" />
            <p className="label">Supply Chain</p>
          </div>
          <div className="cell">
            <img src={ind3} alt="Retail & Ecommerce" />
            <p className="label">Transportation & logistics</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
