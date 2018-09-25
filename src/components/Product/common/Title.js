import React from 'react';


const Title = ({children}) => {
    const style = {
        fontSize:'20px',
        fontWeight:'500'
    };

    return (
        <label style={style}>{children}</label>
    );
}

export {Title};