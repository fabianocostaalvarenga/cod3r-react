import React from 'react'

export default props => (
    <div className="col-lg-2 col-xs-4">
        <div className={`small-box bg-${props.color}`}>
            <div className="inner">
                <h3>R$ {props.value}</h3>
                <p>{props.label}</p>
            </div>
            <div className="icon">
                <i className={`fa fa-${props.icon}`}></i>
            </div>
        </div>
    </div>
)