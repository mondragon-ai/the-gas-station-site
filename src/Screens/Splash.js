import React from 'react'
import { NavLink, Redirect } from 'react-router-dom';

function Splash({ toggleMenu, changePath }) {

    changePath('/');
    return ( 
        <div id="SPLASH">

            {/* Background-img */}
            <div className="bg-img"></div>
            
            <section className="main">
                <div className="container">
                    <div onClick={() => { toggleMenu(true); console.log(true)}} className="button-nav">
                        <NavLink to="/patient/new">
                            <h1>New Patient</h1>
                        </NavLink>
                    </div>
                    <div onClick={() => { toggleMenu(false);  console.log(false) }} className="button-nav">
                        <NavLink to="/home">
                            <h1>Existing Patient</h1>
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Splash
