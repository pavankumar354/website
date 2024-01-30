import Navbar from '../Navbar/index.js'

import Carousel from './Carousel/index.js'
import "./index.css"


const Home=()=>{
    return(
        <div className="home">
            <Navbar/>
            <div className="head">
                <h2 className='heading'>What We Do</h2>
                <Carousel/>
                </div>
            
             </div>
    )
}

export default Home