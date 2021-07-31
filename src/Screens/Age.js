import React from 'react'

function Age(props) {
    return (
        <div id="AGE_VERTIFICATION">
            <section className="age-verification">
                <div className="age-header">
                    <div className="auth-logo">LOGO</div>
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
