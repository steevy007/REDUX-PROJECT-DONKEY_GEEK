import React from 'react'

export default function InfoCard(props) {
    const style=`text-center pt-2 ${props.css}`
    return (
        <p className={style}>
            Disponibilit√© :
            <span id={props.id}> {props.value}</span>
        </p>
    )
}
