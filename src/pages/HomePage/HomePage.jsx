import React from "react";
import Hero from "../../components/Hero/Hero";

const HomePage = (props) => {
    return(
        <div style={{height:"100%"}}> 
            <Hero/>
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