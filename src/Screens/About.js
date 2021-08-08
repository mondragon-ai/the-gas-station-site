import React from 'react'
import bkg from '../assets/images/about_hero_img-1800x974.jpeg'
import bgVideo from '../assets/videos/Top-Shelf-Cannabis-HB.mp4'

function About() {
    return (
        <div id="ABOUT_PAGE">
            <section className="hero-home">
                <div className="hero-container">
                    <h1>Cheapest </h1>
                    <br />
                    <h1 style={{left: "7%", top: "20%"}}>Gas 24/7</h1>
                    <img src={bkg} alt="" />
                </div>
            </section>
            <section className="about">
                <div className="about-one">
                    <img src="" alt="" className="icon" />
                    <h4 className="about-header">ABOUT ONE</h4>
                    <p className="about-text">ipsum loreum</p>
                </div>
                <div className="about-two">
                    <img src="" alt="" className="icon" />
                    <h4 className="about-header">ABOUT Two</h4>
                    <p className="about-text">ipsum loreum</p>
                </div>
                <div className="about-three">
                    <img src="" alt="" className="icon" />
                    <h4 className="about-header">ABOUT THREE</h4>
                    <p className="about-text">ipsum loreum</p>
                </div>
                <div className="about-four">
                    <img src="" alt="" className="icon" />
                    <h4 className="about-header">ABOUT FOUR</h4>
                    <p className="about-text">ipsum loreum</p>
                </div>
            </section>
            <section className="vid-bg">
                <video style={{ height: "100%", width: "auto" }} loop controls  >
                    <source src={bgVideo} type="video/mp4" />
                </video>
            </section>
            <section className="location">
                LOCATION
            </section>
            <section className="special">
                <div className="special-bg"></div>
                <div className="special-text">
                    <p>lorem Ipsum</p>
                    <button className="learn-more">VIEW ALL</button>
                </div>
            </section>
            <footer>

            </footer>
        </div>
    )
}

export default About
