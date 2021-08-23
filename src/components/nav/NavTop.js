import React from 'react'
import { NavLink, useParams} from 'react-router-dom'

function NavTop({ path }) {
    

    return (
        <nav id="TOP-NAV" className="top-nav" style={{zIndex:10000000}}>
            <div style={{  flex: 1 }}></div>
            <div style={{  flex: 2 }} className="nav-tabs">
                <div style={path !== "/home" ? { borderBottom: "0px solid transparent", '& a': { color: "#222 !important", }, } : null}>
                    <NavLink style={path !== "/home" ? {'& a': { color: "#222 !important" } }: null} to="/home">HOME</NavLink>
                </div>
                <div style={ path !== "/goodies" ? {borderBottom: "0px solid transparent"} : null}><NavLink to="/goodies">GOODIES</NavLink></div>
                <div style={ path !== "/about" ? {borderBottom: "0px solid transparent"} : null}><NavLink to="/about">ABOUT</NavLink></div>
                <div style={ path !== "/order" ? {borderBottom: "0px solid transparent"} : null}><NavLink to="/home">ORDER</NavLink></div>
            </div>
            <div style={{  flex: 1 }} className="nav-social">
                <div><a href="https://www.instagram.com/gasstationdispensary/" target="_blank">Let's Talks!</a></div>
            </div>
        </nav>
    )
}


export default NavTop