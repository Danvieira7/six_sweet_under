import React from "react";
import { Link } from "react-scroll";

import "./SideDrawer.css";

const SideDrawer = props => {
    let drawerClasses = "side_drawer";
    if(props.show) {
        drawerClasses = "side_drawer open";
    }
    
    return(
        <nav className={drawerClasses}>
            <ul>
                <li >
                    <Link
                        onClick={props.click} 
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
                        onClick={props.click} 
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
                <li >
                    <Link 
                        onClick={props.click}
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
        </nav>
    );
};

export default SideDrawer;