import React from "react";
import ToggleButton from "../SideDrawer/ToggleButton";
import { Link } from 'react-scroll'

import "./Toolbar.css";

const Toolbar = props => (
    <div className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle_button">
                <ToggleButton click={ props.drawerClickHandler } />
            </div>
            <div className="toolbar_logo"> 
                <Link 
                    className="li"
                    activeClass="active"
                    to="hero"
                    spy={ true }
                    smooth={ true }
                    offset={-20}
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
                            offset={-230}
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
                            offset={ -50 }
                            duration={ 500 }
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
                            offset={ 0 }
                            duration={ 500 }
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="spacer"/>
            <div className="toolbar_nav_icons">  
                <ul>
                    <li>
                        <a href="https://instagram.com/sixsweet_under?igshid=hb7jn3utvma" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-instagram"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/sixsweetunder/" rel="noopener noreferrer" target="_blank" >
                            <i className="fab fa-facebook-square"/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
);

export default Toolbar;