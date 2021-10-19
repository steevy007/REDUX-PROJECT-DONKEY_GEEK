import React from 'react'

export default function Button(props) {
    const style=`btn ${props.css} `
    return (
        <button style={props.block && {width:'100%'}} className={style} onClick={props.click}>{props.text}</button>
    )
}
