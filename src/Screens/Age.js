import React from 'react'
import logo from '../assets/images/logo.png'

function Age(props) {
    
    return (
        // TODO: BG-COLOR: #222
        <div id="AGE_VERTIFICATION">
            
            {/* Background-img */}
            <div className="bg-img"></div>

            <section className="age-verification"> 
                <div className="age-header">
                    <div className="auth-logo"><img src={logo} style={{height: '10vh', width: "auto" }} alt="" /></div>
                </div>
                <div className="age-body">
                    <div className="age-head-text"><h1>AGE VERIFICATION</h1></div>
                    <div className="age-body-text"><p>Must be 21 or older to ender</p></div>
                    <div className="age-buttons">
                        <button onClick={() => props.setAge(true)} className="btn accent">21</button>
                        <button onClick={() => props.setAge(false)}  className="btn">Not 21</button>
                    </div>
                </div>
                <div className=""></div>
            </section>
        </div>
    )
}

export default Age
