import React from 'react';
import "./Navbar.css"
import {Link} from "react-router-dom";


function Navbar() {
    const image ={
        MeanAsLogo : "NobgLogo.png"
    }
    return (
        <div className="nav">
            <Link to ="/"  className='logo'>
                <img src={image.MeanAsLogo} alt="MeanAsLogo"/>
            </Link>
           <ul className="menu">
               <li><Link id="l1" to="">About</Link></li>
               <li><Link id="l1" to="">Features</Link></li>
               <li><Link to="/FreeAuth" id="l1">Dashboard</Link></li>
           </ul>
            <ul className="try">
                 <li><Link id="try" to="/FreeAuth">Try For Free</Link></li>
            </ul>
        </div>
        )
}

export default Navbar;

