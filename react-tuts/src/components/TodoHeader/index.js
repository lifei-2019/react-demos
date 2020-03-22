import React from 'react'
import PropTypes from 'prop-types'

export default function TodoHeader(props) {
    console.log(props)
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

TodoHeader.propTypes = {
    desc: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,  //是否是数据以及是否必要
    y: PropTypes.number
}

TodoHeader.defaultProps = {
    desc: '明天会更好'
}