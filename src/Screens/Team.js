import React from 'react'

function Team() {
    
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
        <div id="TEAM" className="" style={{height: `${h}px`}} >
            <section className="main">
                <div className="container-team">
                    <h1>Apply</h1>
                    <h1>New Hire?</h1>
                </div>
            </section>
        </div>
    )
}

export default Team
