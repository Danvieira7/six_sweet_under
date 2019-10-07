import React from "react";
import ToggleButton from "../SideDrawer/ToggleButton";
import { Link } from 'react-scroll'

import "./Toolbar.css";


const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle_button">
                <ToggleButton 
                    click={props.drawerClickHandler}
                />
            </div>
            <div className="toolbar_logo"> 
                <Link 
                    className="li"
                    activeClass="active"
                    to="hero"
                    spy={ true }
                    smooth={ true }
                    offset={0}
                    duration={500}
                >
                    <img src="https://i.imgur.com/jIu9duU.png" alt=""/>
                </Link>
            </div>
            <div className="spacer"/>
            <div className="toolbar_nav_items">
                <ul>
                    <li>
                        <Link 
                            className="li"
                            activeClass="active"
                            to="about"
                            spy={ true }
                            smooth={ true }
                            offset={-210}
                            duration={500}
                        >
                            About
                        </Link>
                    </li>
                    <li >
                        <Link 
                            className="li"
                            activeClass="active"
                            to="products"
                            spy={ true }
                            smooth={ true }
                            offset={-90}
                            duration={500}
                        >
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className="li"
                            activeClass="active"
                            to="contact"
                            spy={ true }
                            smooth={ true }
                            offset={0}
                            duration={500}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="spacer"/>
            <div className="toolbar_nav_icons">  
                <ul>
                    <li><a href="https://instagram.com/sixsweet_under?igshid=hb7jn3utvma" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://www.facebook.com/sixsweetunder/" rel="noopener noreferrer" target="_blank" ><i className="fab fa-facebook-square"></i></a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;