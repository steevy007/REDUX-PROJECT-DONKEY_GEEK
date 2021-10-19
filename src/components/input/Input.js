import React from 'react'

export default function Input(props) {
    return (
        <div className="mb-3">
            <input type={props.type} value={props.value} onChange={props.handleChange} className="form-control" id={props.id} placeholder={props.placeholder} />
        </div>
    )
}
