import React from 'react'

export default props => (
    <button className={`btn btn-${props.tema}`} onClick={props.onClick} >
        <i className={`fa fa-${props.icon}`}/>
    </button>
)