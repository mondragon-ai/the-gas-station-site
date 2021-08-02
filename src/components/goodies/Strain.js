import React from 'react'

function Strain(props) {
    console.log(props);
    return (
        <div className="strains">
            <header className="strain-top">
                <div className="strain-title"><h1>{props.data.title}</h1></div>
                <div className="thc-container">
                    <div className="thc-item">
                        <p>{`${props.data.thc}%`}</p>
                        <p>THC</p>
                    </div>
                    <div className="thc-item"><span>{props.data.strain}</span></div>
                </div>
            </header>
            <div className="img-container">
                <img src={`${props.data.img}`} alt="" />
            </div>
            <footer className="strains-footer">
                <div className="description-container">
                    <h3>Effects</h3>
                    <p className="">{props.data.effects}</p>
                </div>
                <div className="description-container">
                    <h3>Aroma</h3>
                    <p className="">{props.data.aroma}</p>
                </div>
            </footer>

        </div>
    )
}

export default Strain
