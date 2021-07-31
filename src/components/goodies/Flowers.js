import React from 'react'
import Strain from './Strain'

const strains = [{title: "Purple Punch", img: '', thc: 10, }]

function Flowers(props) {
    return (
        <section id="FLOWERS" style={{ background: "purple" }}>
            <Strain data={props.data} />
            <Strain data={props.data} />
            <Strain data={props.data} />
            <Strain data={props.data} />
            <Strain data={props.data} />
            <Strain data={props.data} />
            <Strain data={props.data} />
            <Strain data={props.data} />
            <Strain data={props.data} />
        </section>
    )
}

export default Flowers
