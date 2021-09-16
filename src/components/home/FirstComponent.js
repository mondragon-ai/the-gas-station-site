import React from 'react'
import twenty4 from '../../assets/images/graphics/sign/24-7-always-open-alt.png'
import gas from '../../assets/images/graphics/misc/gascan-.png'
import cat from '../../assets/images/icons/icon-cat-gif.gif'
import smile from '../../assets/images/graphics/faces/smiley-face-3-03.png'
import cloudOne from '../../assets/images/clouds/cloud-one.png'
import cloudTwo from '../../assets/images/clouds/cloud-two.png'
import cloudThree from '../../assets/images/clouds/cloud-two.png'
import Tilt from 'react-tilt'

function FirstComponent() {

    return (
        <div id="SLIDES" className="first-slide" >

            {/* <div className="designs first-slide-design-1">
                <img src={cloudThree} alt="" />
            </div> */}

            {/* <div className="designs first-slide-design-2">
                <img src={cloudTwo} alt="" />
            </div>
            <div className="designs first-slide-design-3">
                <img src={cloudOne} alt="" />
            </div> */}

            {/* <div className="designs first-slide-design-4">
                <img src={gas} alt="" />
            </div> */}
            {/* <div className="designs first-slide-design-5">
                <img src={twenty4} alt="" />
            </div>
            <div className="designs first-slide-design-6" >
                <img src={cat} alt="" />
            </div>
            <div className="designs first-slide-design-7" >
                <img src={smile} alt="" />
            </div> */}


            <div className="slides-bg " style={{ width: "80%" }}>
                <div className="slides-bg-first"></div>
                <div className="slide-card" style={{ width: "100%" }}>
                    {/* <div><p className="">. 01 .</p></div> */}
                    <div>
                        {/* <h2>Cheapest</h2> 
                        <h1>Gas 24/7</h1> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstComponent
