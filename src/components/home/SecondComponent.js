import React from 'react'
import cinderella from '../../assets/images/cinderella-gif.gif'
import smile from '../../assets/images/graphics/faces/smiley-face-3-03.png'
import sparkle from '../../assets/images/icons/icon-weed-sparkle-gif.gif'
import cloudOne from '../../assets/images/clouds/cloud-one.png'
import cloudTwo from '../../assets/images/clouds/cloud-two.png'
import cloudThree from '../../assets/images/clouds/cloud-two.png'
import Tilt from 'react-tilt'

function SecondComponent() {
    return (
        <div id="SLIDES" className="second-slide" >

            <Tilt className="designs first-slide-design-1">
                <img src={cloudThree} alt="" />
            </Tilt>

            <Tilt className="designs first-slide-design-2">
                <img src={cloudTwo} alt="" />
            </Tilt>
            <Tilt className="designs first-slide-design-3">
                <img src={cloudOne} alt="" />
            </Tilt>


            <Tilt className="designs first-slide-design-4">
                <img src={smile} alt="" />
            </Tilt>

            <Tilt className="designs first-slide-design-5">
                <img src={sparkle} alt="" />
            </Tilt>

            <div className="slides-bg" style={{ width: "80%" }}>
                {/* <div className="designs second-slide-design-one"><img src={cinderella} alt="" /></div> */}
                <div className="slide-card" style={{ width: "100%" }}>
                    <div style={{ margin: "0% 5% 0 0" }} className="text">
                        <p >. 02 .</p>
                    </div>
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
