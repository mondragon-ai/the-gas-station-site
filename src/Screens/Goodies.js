import React, { useState } from 'react'
import Flowers from '../components/goodies/Flowers';
import Concentrates from '../components/goodies/Concentrates';
import Edibles from '../components/goodies/Edibles';
import Gear from '../components/goodies/Gear';

function Goodies() {
    const [selected, select] = useState('')

    const handleSelector = (selected_item) => {
        select(selected_item);
    }

    return (
        <div id="GOODIES_PAGE" className="">
            <section className="menu" style={selected === "" ? {display: "flex"}  : {display: "none"}  }>
                <div className="menu-container">
                    <div onClick={() => handleSelector('FLOWER')} className="menu-card">FLOWER</div>
                    <div onClick={() => handleSelector('EDIBLES')}  className="menu-card">EDIBLES</div>
                    <div onClick={() => handleSelector('CONCENTRATES')}  className="menu-card">CONENTRATES</div>
                    <div onClick={() => handleSelector('GEAR')}  className="menu-card">GEAR</div>
                </div>
            </section>

            <section className="selected" style={selected === "" ? {display: "none"} : {display: "flex"}  }>
                {selected === "FLOWER" ? <Flowers /> : 
                 selected === "CONCENTRATES" ? <Concentrates /> :
                 selected === "EDIBLES" ? <Edibles /> : 
                 selected === "GEAR" ? <Gear /> : null }
            </section>
        </div>
    )
}

export default Goodies
