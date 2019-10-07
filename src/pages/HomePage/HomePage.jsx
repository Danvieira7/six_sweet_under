import React from "react";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import About from "../../components/About/About";

import "./HomePage.css"

const HomePage = () => {
    return(
        <div className="home_page">
            <Hero id="hero" />
            <About id="about" />
            <Products id="products"  />
            <footer className="footer element"  >    
                <img src="https://i.imgur.com/jIu9duU.png" alt=""/>
                <p>
                    Contact Us <br/>
                    Phone: (323) 609-3796 <br/>
                    Email: sixsweetunder@gmail.com
                </p>
                <p className="Copyright" id="contact">
                    © 2019 Copyright: Six Sweet Under <br/>
                    Created by- 
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