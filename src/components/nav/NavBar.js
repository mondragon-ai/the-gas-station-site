import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {
    console.log("MAIN NAV BAR ==> ");
    return (
        <nav id="MAIN-NAV" className="main-nav">
            <div className="logo"><NavLink to="/">LOGO</NavLink></div>
            <div className="hamburger" >HAMBURGER</div> 
        </nav>
    )
}

export default NavBar
