import React from 'react';


const List = (children) => {
   const content = children.children;
   return( 
    <ul style={{fontSize:'13px', color:'gray', padding:'0'}}>
        {content.map(x => <li>{x}</li>)}
    </ul>);
}

export  { List };