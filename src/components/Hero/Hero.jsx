import React from "react";
import { Spring } from "react-spring/renderprops";

import "./Hero.css";

export default function Hero() {
    return(
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={ {delay: 500, duration:1000} } >
            {props => (
                <div style={ props }>
                    <div className="hero-container" id="hero">
                        <img className="photo" src="https://i.imgur.com/PdH1RcD.jpg" alt="F Dot Logo"/>
                        <h1 className="ssu"> Six Sweet Under </h1>
                    </div> 
                </div>
            )}
        </Spring>
    );
}  