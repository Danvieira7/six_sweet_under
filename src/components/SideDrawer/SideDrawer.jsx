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
                <li><a href="/">Link 1</a></li>
                <li><a href="/">Link 2</a></li>
            </ul>
        </nav>
    );
};

export default SideDrawer;