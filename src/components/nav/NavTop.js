import React from 'react'
import { NavLink } from 'react-router-dom'

function NavTop() {
    return (
        <nav id="TOP-NAV" className="top-nav" style={{ background: "red", zIndex:10000000}}>
            <div style={{  flexGrow: 1 }}></div>
            <div className="nav-tabs">
                <div><NavLink to="/">HOME</NavLink></div>
                <div><NavLink to="/goodies">PRODUCT</NavLink></div>
                <div><NavLink to="/about">ABOUT</NavLink></div>
                <div>ORDER</div>
            </div>
            <div className="nav-social">
                <div>IG</div>
                <div>FB</div>
                <div>WM</div>
            </div>
        </nav>
    )
}


export default NavTop