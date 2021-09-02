import React, { useEffect, useState } from 'react'

function FlowerDetail({ changePath, data }) {
    
    changePath(`/strain/${data.title}`)

    console.log(data.title)

    const [h, setHeight] = useState(window.innerHeight);

    useEffect(() => {

        window.addEventListener('resize', () => {
            setHeight(window.innerHeight);
        })
        return () => {

            window.addEventListener('resize', () => {
                setHeight(window.innerHeight);
            }) 

        }
    }, [])


    return (
        <div id="FLOWER_DETAIL" style={{height: `${h}px`}}>
            <section className="main">
                <div className="top-container">
                    TEST
                </div>
                <div className="body-container">
                    TEST
                </div>
            </section>
        </div>
    )
}

export default FlowerDetail
