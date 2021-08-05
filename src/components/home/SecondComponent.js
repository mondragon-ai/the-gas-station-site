import React from 'react'
import cinderella from '../../assets/images/cinderella-gif.gif'
import head from '../../assets/images/icons/icon-head-planet.png'
import sparkle from '../../assets/images/icons/icon-weed-sparkle-gif.gif'
import Tilt from 'react-tilt'

function SecondComponent() {
    return (
        <div id="SLIDES" className="second-slide" >
            <Tilt
                style={{transform: "rotate(-30deg)"}}
                className="designs first-slide-design-one"
            >
                <img src={head} alt="" />
            </Tilt>
            <Tilt
                style={{transform: "rotate(-30deg)"}}
                className="designs first-slide-design-two"
            >
                <img src={sparkle} alt="" />
            </Tilt>
            <div className="slides-bg" style={{ width: "80%" }}>
                <div className="designs second-slide-design-one"><img src={cinderella} alt="" /></div>
                <div className="slide-card" style={{ width: "100%" }}>
                    <div className="text">
                        <h1>Order</h1>
                        <h2>Goodies to Go</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondComponent
