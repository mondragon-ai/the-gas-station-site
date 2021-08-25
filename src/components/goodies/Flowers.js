import React from 'react'
import Strain from './Strain'
import mandarin from '../../assets/images/strains/Mandarin-Sunset-min.jpeg'
import texas from '../../assets/images/strains/Sour-Strawberry-2-min.jpeg'
import lost from '../../assets/images/strains/Lost-Cause-2-min.jpeg'
import og from '../../assets/images/strains/Texas-Shoreline-2-min.jpeg'
import sour from '../../assets/images/strains/Lost-Cause-2-min.jpeg'

const strains = [
    { title: "Purple Punch", img: mandarin, thc: 30, strain: 'Sativa', effects: 'Creative, Happy, Productive', taste: "earthy", aroma: 'heavy citris'},
    { title: "Texas Smash", img: texas, thc: 25, strain: 'indica', effects: 'Creative, Happy, Productive', taste: "earthy", aroma: 'heavy citris'},
    { title: "Lost", img: lost, thc: 28, strain: 'Sativa', effects: 'Creative, Happy, Productive', taste: "earthy", aroma: 'heavy citris'},
    { title: "Sour Kush", img: sour, thc: 22, strain: 'indica', effects: 'Creative, Happy, Productive', taste: "earthy", aroma: 'heavy citris'},
    { title: "OG Orange", img: og, thc: 23, strain: 'Hybrid', effects: 'Creative, Happy, Productive', taste: "earthy", aroma: 'heavy citris'},
]

const strain_ln = strains.length;

function Flowers(props) {

    var [w, setHeight] = React.useState(window.innerWidth)
  
    React.useEffect(() => {
      window.addEventListener('resize', () => {
            setHeight(window.innerWidth)
      })
  
      return () => {
        window.removeEventListener("resize", () => {
            setHeight(window.innerWidth)
        })
      }
  
    }, []);

    const h = w <  750 ? `${props.data}px` : "80vh";

    return (
        <section id="FLOWERS" style={{ background: "#FFF", height: `${h}`}}>
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
