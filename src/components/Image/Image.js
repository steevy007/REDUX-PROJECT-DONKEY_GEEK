import React from 'react'

export default function Image(props) {
    const style=`${props.css}`
    return (
        <img style={{width:'100%',height:'200px',objectFit:'cover'}} className={style} src={props.src} alt={props.alt} />
    )
}
