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
                <a href="/">SSU</a>
            </div>
            <div className="spacer"/>
            <div className="toolbar_nav_items">
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Products</a></li>
                </ul>
            </div>
            <div className="spacer"/>
            <div className="toolbar_nav_icons">  
                <ul>
                    <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="/"><i className="fab fa-facebook-square"></i></a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;