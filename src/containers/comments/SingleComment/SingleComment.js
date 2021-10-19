import React from 'react'

export default function SingleComment(props) {
    return (
        <div className='col-12 m-2 p-2 border' >
            {props.text}
            <br/>
            <b>email : {props.email}</b>
        </div>
    )
}
