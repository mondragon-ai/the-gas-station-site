import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import menuLogo from '../../assets/images/graphics/gas/logo-tiedie.png';
import logo from '../../assets/images/graphics/gas/GAS-wavy-2-03.png';

const Menu = (props) => {
    
    var [h, setHeight] = React.useState(window.innerHeight)
  
    React.useEffect(() => {
      window.addEventListener('resize', () => {
            setHeight(window.innerHeight)
      })
  
      return () => {
        window.removeEventListener("resize", () => {
            setHeight(window.innerHeight)
        })
      }
  
    }, []);

    return (
        <section className="mobile-menu" style={{height: `${h}px`}}>
            <div className="mobile-menu-container"></div>
            <div onClick={() => props.toggleMenu(!props.isOpen)} className="mobile-menu-header">
                <div className="logo">
                    <img src={menuLogo} alt="" />
                </div>
                <div className="close"><h1>X</h1></div>
            </div>
            <div className="mobile-menu-body">
                <ul className="mobile-nav">
                    <li className="link"><NavLink onClick={() => props.toggleMenu(!props.isOpen)}  to="/about" >ABOUT</NavLink></li>
                    <li className="link"><NavLink onClick={() => props.toggleMenu(!props.isOpen)}  to="/goodies" >THE GOODS</NavLink></li>
                    <li className="link"><a href="">ORDER</a></li>
                    <li onClick={() => console.log("SHOW LOCATIONS!")} className="link">PICK UP</li>
                </ul>
            </div>
            <div className="mobile-menu-footer">
                <div className="ig-social">
                    <div className="ig-handle">@IG_HANDLE</div>
                    <a href="" className="ig-link">IG</a>
                </div>
                <div></div>
            </div>
        </section>
    )
}

function NavMobile() {

    const [isOpen, toggleMenu] = useState(false)

    return (
        <>
            <nav id="MOBILE_NAV" className="mobile-nav">
                <div className="logo">
                    <NavLink to="/" >
                    <img src={logo} alt="" />
                </NavLink></div>
                <div className="hamburger" onClick={() => toggleMenu(!isOpen)}><h1>HAM</h1></div>
            </nav>

            {isOpen ? <Menu isOpen={isOpen} toggleMenu={toggleMenu} /> : null};
            
        </>
    );

}

export default NavMobile
