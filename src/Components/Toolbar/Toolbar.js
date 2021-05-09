import React, { Component } from "react";
import "./Toolbar.css";

import NavigationItems from "./NavigationItems/NavigationItems";

class Header extends Component{

    render(){
        return(
            <>
            <div className="Head">
                <div className="Head-left">ueno.</div>
                <div style={{display:'flex'}}>
                        <div><NavigationItems /></div>
                       
                </div>
            </div>
     </>
        );
    }
}

export default Header;
