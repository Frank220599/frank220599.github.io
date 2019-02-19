import React from 'react'

const Button = (props) => (
    <div className={'button_wrapper'}>
        <div className="nav-icon" onClick={props.onClick}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
);

export default Button;