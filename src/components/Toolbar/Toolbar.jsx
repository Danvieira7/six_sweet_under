import React from "react";
import ToggleButton from "../SideDrawer/ToggleButton";
import "./Toolbar.css";

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle_button">
                <ToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo"> 
                <a href="/">Logo</a>
            </div>
            <div className="spacer"/>
            <div className="toolbar_nav_items">
                <ul>
                    <li><a href="/">link 1</a></li>
                    <li><a href="/">link 2</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;