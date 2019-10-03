import React from "react";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";

const HomePage = (props) => {
    return(
        <div style={{height:"100%"}}> 
            <Hero/>
            <Products />
            <footer className="footer">
            <div>
                © 2019 Copyright: Six Sweet under<br/>
                Created by <a href="/">Danillo Vieira</a>
            </div>
            </footer>
        </div>
    );
}

export default HomePage;