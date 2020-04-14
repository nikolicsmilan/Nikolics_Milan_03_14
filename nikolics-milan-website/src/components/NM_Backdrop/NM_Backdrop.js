import React from 'react';

import './NM_Backdrop.css';

const backdrop = props => (
    <div className="NMbackdrop" onClick={props.click} >
        <h1>Ez a Backdrop</h1>
   {/*  
    <h1>bezár</h1> 
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
    </button>
               <h1>bezár</h1>       
         <h1>bezár</h1> 
          */}
    </div>
);

export default backdrop;