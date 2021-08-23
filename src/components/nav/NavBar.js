import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

function NavBar() {

    

    return (
        <nav id="MAIN-NAV" className="main-nav">
            <div className="logo"><NavLink to="/home"><img src={logo} alt="" /></NavLink></div>
            <div className="hamburger" >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default NavBar
