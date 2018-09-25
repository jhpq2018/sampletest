import React from 'react';
import './Button.css';

const Button = ({onPress, children}) => {
    return <button className="btn" onClick={onPress}>{children}</button>
}

export {Button};