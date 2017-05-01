import React from 'react'

export default props => (
    <div>
        <h2>Família</h2>
        { React.Children.map(props.children, 
            child => React.cloneElement(child, {...props})) }
    </div>
)