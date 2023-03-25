import React from 'react'

function Title() {

    console.log("Rendering title")

    return (
        <h2>
            I Am A CallBack Hook
        </h2>
    )
}

export default React.memo(Title)