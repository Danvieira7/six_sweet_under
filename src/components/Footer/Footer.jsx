import React from "react";
import "./Footer.css"; 

const Footer = () => {
    return (
        <footer className="footer element">    
                <img src="https://i.imgur.com/jIu9duU.png" alt=""/>
                <p>
                    Contact Us 
                    <br/>
                    <a href="tel:3236093796">
                        <i className="fas fa-phone-square"/> (323) 609-3796
                    </a>
                    <br/>
                    <a href="mailto:sixsweetunder@gmail.com"> 
                        <i className="fas fa-envelope"/> sixsweetunder@gmail.com 
                    </a>
                </p>
                <p className="Copyright">
                    Website created by: <a id="contact" href="https://www.danillovieira.com/" rel="noopener noreferrer" target="_blank">Danillo Vieira </a>
                    <br/>
                    © 2019 Copyright: Six Sweet Under 
                </p>   
            </footer>
    );
}

export default Footer;