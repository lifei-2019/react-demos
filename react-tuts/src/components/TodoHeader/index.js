import React from 'react'

export default function TodoHeader(props) {
    return (
        <>    
        <h1>
            {props.children}
        </h1>
        <h3>
            {props.desc}
        </h3>
        <p>{props.x+props.y}</p>
        </>
    )
}
