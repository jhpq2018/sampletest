import React from 'react';

const Price = ({children}) =>{
    return (
        <div>
            <span style={{fontSize:'26px'}}>
                <strike><span style={{fontSize:'13px'}}>$</span>{children.before}</strike>
            </span> 
            &nbsp;&nbsp;&nbsp;
            <span style={{color:'red', fontSize:'26px'}}>{children.now}/mo</span>
            <br/>
            <label style={{color:'red', fontSize:"10px"}}>{children.savings}</label>
        </div>
    );
};  

export { Price };