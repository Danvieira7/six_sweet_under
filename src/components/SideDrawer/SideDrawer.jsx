import React from "react";
import "./SideDrawer.css";

const SideDrawer = props => {
    let drawerClasses = "side_drawer";
    if(props.show){
        drawerClasses = "side_drawer open";
    }
    
    return(
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">About</a></li>
                <li><a href="/">Products</a></li>
                <li><a href="/">Products</a></li>
            </ul>
        </nav>
    );
};

export default SideDrawer;