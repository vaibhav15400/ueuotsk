import React from 'react';
import './SideDrawer.css';

const SideDrawer=(props)=>{

    
    return(
        <div className='SideDrawer ' clicked={props.closed}>
            <h1>multiple comtent</h1>
        </div>
    );
};


export default SideDrawer;