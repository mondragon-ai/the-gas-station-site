import React from 'react'
import { NavLink } from 'react-router-dom'

function NavFooter() {
    return (
        <nav id="FOOTER-NAV" className="footer-nav">
            {/* style={{ width: "window.innerWidth * 0.8" }}> */}
            <div><p className="">© 2021 Midwest, LLC </p> • <a>Credits</a> • <a>Credits</a></div>
            <div><NavLink to="/about/#">Contacts</NavLink></div>
        </nav>
    )
}

export default NavFooter
