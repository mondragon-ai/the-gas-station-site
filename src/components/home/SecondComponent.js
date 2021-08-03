import React from 'react'
import cinderella from '../../assets/images/cinderella-gif.gif'
import head from '../../assets/images/icon-head-planet.png'
import sparkle from '../../assets/images/icon-weed-sparkle-gif.gif'

function SecondComponent() {
    return (
        <div id="SLIDES" className="second-slide" >
            <div className="designs second-slide-design-two"><img src={head} alt="" /></div>
            <div className="designs second-slide-design-three"><img src={sparkle} alt="" /></div>
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
