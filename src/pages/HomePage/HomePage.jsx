import React from "react";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import About from "../../components/About/About";
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import "./HomePage.css"

const HomePage = () => {
    return(
        <div className="home_page">
            <Hero id="hero" className="element" />
            <About id="about" />
            <Products id="products"  className="element" />
            <footer className="footer element" id="contact" name="contact">    
                <img src="https://i.imgur.com/jIu9duU.png" alt=""/>
                <p>
                    Contact Us <br/>
                    Phone: (000) 000 - 0000 <br/>
                    Email: sixsweetunder@gmail.com
                </p>
                <p className="Copyright">
                    © 2019 Copyright: Six Sweet Under <br/>
                    Created by 
                    <a 
                        href="https://www.danillovieira.com/"   
                        rel="noopener noreferrer" 
                        target="_blank"
                    >
                        Danillo Vieira
                    </a>
                </p>   
            </footer>
        </div>
    );
}

export default HomePage;