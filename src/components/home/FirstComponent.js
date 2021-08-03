import React from 'react'
import adventur from '../../assets/images/adventure-icon.png'
import astro from '../../assets/images/icon-astronaut.png'
import cat from '../../assets/images/icon-cat-gif.gif'
import dr from '../../assets/images/icon-dr-seed.png'

function FirstComponent() {
    return (
        <div id="SLIDES" className="first-slide" >
            <div className="designs first-slide-design-one"><img src={adventur} alt="" /></div>
            <div className="designs first-slide-design-two"><img src={astro} alt="" /></div>
            <div className="designs first-slide-design-three"><img src={cat} alt="" /></div>
            <div className="designs first-slide-design-four"><img src={dr} alt="" /></div>
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
