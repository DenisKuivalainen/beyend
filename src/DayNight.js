import React from 'react'

const DayNight = (props) => {
    let picts = React.Children.toArray(props.children)
    let today = new Date();
    let dayTime = Math.round(today.getHours()/6) - 1

    let eType = picts[dayTime].type
    let eProps = picts[dayTime].props
    
    return(
        React.createElement(eType, eProps)  
    )
}

export default DayNight