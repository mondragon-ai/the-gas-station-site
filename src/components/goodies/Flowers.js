import React from 'react'
import Strain from './Strain'
import mandarin from '../../assets/images/Mandarin-Sunset-min.jpeg'
import texas from '../../assets/images/Texas-Shoreline-2-min.jpeg'
import lost from '../../assets/images/Lost-Cause-2-min.jpeg'
import og from '../../assets/images/Texas-Shoreline-2-min.jpeg'
import sour from '../../assets/images/Lost-Cause-2-min.jpeg'

const strains = [
    { title: "Purple Punch", img: mandarin, thc: 30, strain: 'Sativa', effects: 'Creative, Happy, Productive', taste: "earthy", aroma: 'heavy citris'},
    { title: "Texas Smash", img: texas, thc: 25, strain: 'indica', effects: 'Creative, Happy, Productive', taste: "earthy", aroma: 'heavy citris'},
    { title: "Lost", img: lost, thc: 28, strain: 'Sativa', effects: 'Creative, Happy, Productive', taste: "earthy", aroma: 'heavy citris'},
    { title: "Sour Kush", img: sour, thc: 22, strain: 'indica', effects: 'Creative, Happy, Productive', taste: "earthy", aroma: 'heavy citris'},
    { title: "OG Orange", img: og, thc: 23, strain: 'Hybrid', effects: 'Creative, Happy, Productive', taste: "earthy", aroma: 'heavy citris'},
]


const strain_ln = strains.length;

function Flowers(props) {

    return (
        <section id="FLOWERS" style={{ background: "#FFF", }}>
            {strains && strains.map((strain) => {
                console.log((strain_ln % 2), strain);
                return (
                <Strain data={strain} key={strain.title} />)
                })
            }
            {strain_ln % 2 !== 0 ? (<div className="strains"></div>) : null}
            
        </section>
    )
}

export default Flowers
