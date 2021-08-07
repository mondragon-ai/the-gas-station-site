import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/graphics/gas/GAS-wavy-3-03.png'

function NavBar() {
    console.log("MAIN NAV BAR ==> ");
    return (
        <nav id="MAIN-NAV" className="main-nav">
            <div className="logo"><NavLink to="/"><img src={logo} alt="" /></NavLink></div>
            <div className="hamburger" >- - -</div> 
        </nav>
    )
}

export default NavBar
