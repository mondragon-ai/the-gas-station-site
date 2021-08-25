import React from 'react'

function NewPatient({ changePath }) {
    
    changePath("/patient/new");

    return (
        <div id="NEW_PATEINT" >
            {/* Background-img */}
            <div className="bg-img"></div>
            <section className="main"></section>
        </div>
    )
}

export default NewPatient
