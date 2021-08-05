import React from 'react'
import adventur from '../../assets/images/icons/adventure-icon.png'
import astro from '../../assets/images/icons/icon-astronaut.png'
import cat from '../../assets/images/icons/icon-cat-gif.gif'
import dr from '../../assets/images/icons/icon-dr-seed.png'
import Tilt from 'react-tilt'

function FirstComponent() {

    return (
        <div id="SLIDES" className="first-slide" >
            <Tilt
                style={{transform: "rotate(-30deg)"}}
                className="designs first-slide-design-one"
            >
                <img src={adventur} alt="" />
            </Tilt>

            <Tilt
                
                className="designs first-slide-design-two"
            >
                <img src={astro} alt="" />
            </Tilt>

            <Tilt
            className="designs first-slide-design-three"
            >
                <img src={cat} alt="" />
            </Tilt>

            <Tilt
            className="designs first-slide-design-four"
            >
                <img src={dr} alt="" />
            </Tilt>
            <div className="slides-bg" style={{ width: "80%" }}>
                <div className="slide-card" style={{ width: "100%" }}>
                    <div><p className="">. 01 .</p></div>
                    <div>
                        <h2>Cheapest</h2> 
                        <h1>Gas 24/7</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstComponent
