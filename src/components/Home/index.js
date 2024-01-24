import Navbar from '../Navbar/index.js'
import Services from '../Services/index.js'
import "./index.css"


const Home=()=>{
    return(
        <div className="home">
            <Navbar/>
            <Services/>
            <div className="head"><h1>HARNESS THE SYNERGY OF<br/> DATA, ANALYTICS,<br/> AND AI</h1>
        <p>We are a Data Analytics & AI solutions company that helps<br/> businesses make data-driven decisions</p>
          <button type="button" className="button1">Let's Connect</button></div>
            
             </div>
    )
}

export default Home