import React from "react";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import About from "../../components/About/About";

import "./HomePage.css"

const HomePage = () => {
    return(
        <div className="home_page">
            <Hero />
            <About id="about" />
            <Products id="products"  />
            <footer className="footer element"  >    
                <img src="https://i.imgur.com/jIu9duU.png" alt=""/>
                <p>
                    Contact Us 
                    <br/>
                    <a href="tel:3236093796">
                        <i className="fas fa-phone-square"/> (323) 609-3796
                    </a>
                    <br/>
                    <a href="meilto:sixsweetunder@gmail.com"> 
                        <i className="fas fa-envelope"/> sixsweetunder@gmail.com 
                    </a>
                </p>
                <p className="Copyright" >
                    Created by
                    <a 
                        id="contact"
                        href="https://www.danillovieira.com/"   
                        rel="noopener noreferrer" 
                        target="_blank"
                    >
                        : Danillo Vieira
                    </a>
                    <br/>
                    © 2019 Copyright: Six Sweet Under 
                </p>   
            </footer>
        </div>
    );
}

export default HomePage;