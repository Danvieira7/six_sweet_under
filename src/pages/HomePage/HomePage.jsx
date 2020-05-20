import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Products from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";

import "./HomePage.css"

const HomePage = () => {
    return(
        <div className="home_page">
            <Hero />
            <About id="about" />
            <Products id="products" />
            <Footer />
        </div>
    );
}

export default HomePage;