import React, { useState } from 'react'
import Flowers from '../components/goodies/Flowers';
import Concentrates from '../components/goodies/Concentrates';
import Edibles from '../components/goodies/Edibles';
import Gear from '../components/goodies/Gear';

function Goodies({ changePath }) {

    changePath("/goodies")

    const [selected, select] = useState('');
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

    const handleSelector = (selected_item) => {
        select(selected_item);
    }

    return (
        <div id="GOODIES_PAGE" style={{height: `${h}px`}}>
            <section className="menu" style={selected === "" ? {display: "flex"}  : {display: "none"}  }>
                <div className="menu-container">
                    <div onClick={() => handleSelector('FLOWER')} className="menu-card"><h1>FLOWER</h1></div>
                    <div onClick={() => handleSelector('EDIBLES')}  className="menu-card"><h1>EDIBLES</h1></div>
                    <div onClick={() => handleSelector('CONCENTRATES')}  className="menu-card"><h1>CONENTRATES</h1></div>
                    <div onClick={() => handleSelector('GEAR')}  className="menu-card"><h1>GEAR</h1></div>
                </div>
            </section>

            <section className="selected" style={ selected === "" ? {display: "none"} : {display: "flex"}  }>
                {
                    selected === "FLOWER" ? <Flowers data={h} /> : 
                    selected === "CONCENTRATES" ?  <Flowers data={h} />:
                    selected === "EDIBLES" ?  <Flowers data={h}/> : 
                    selected === "GEAR" ? <Flowers data={h}/> : null
                }
                <button onClick={() => handleSelector('')} className="close-goodies">
                    <div></div>
                    <div></div>
                </button>
            </section>
        </div>
    )
}

export default Goodies
