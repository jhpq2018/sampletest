import React from 'react';


const Card = (props) => {

    const style = {
        paddingTop:'12px',
        textAlign: props.align || 'left'
    };

    return <div style={style}>{props.children}</div>;
}

export {Card};