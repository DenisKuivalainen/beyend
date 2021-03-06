import React from 'react'

const DayNight = (props) => {
    let picts = React.Children.toArray(props.children)
    let today = new Date();
    let dayTime = Math.floor(today.getHours()/6)

    let eType = picts[dayTime].type
    let eProps = Object.assign({}, picts[dayTime].props, {class: "g_img"})

    return(
        React.createElement(eType, eProps)  
    )
}

export default DayNight