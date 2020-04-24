import React from "react";

export default function Strip(props) {
    let arr = [] 
    var yvar = 0
    var wvar = Number(props.w)
    var hvar = Number(props.h)
    var dvar = (wvar - 3*hvar)/2

    for(let i = 0; i <3; i++){
        let rect = {}
        rect.x = 0
        rect.y = yvar
        rect.w = wvar
        rect.h = hvar
        arr.push(rect)
        yvar = yvar + hvar + dvar
    }

    return (<svg  class={props.class} width={wvar} height={wvar} version="1.1">
        {arr.map((c) => (
        <rect x={c.x} y={c.y} width={c.w} height={c.h}/>
        ))}
        </svg>
    )
}