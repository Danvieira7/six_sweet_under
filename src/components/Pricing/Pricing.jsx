import React from "react";

import "./Pricing.css";

const Pricing = () => {
    return(
        <div className="pricing"> 
            <div className="pricing_content">
                <h1 className="h">All cakes are 3 layers with American Buttercream</h1>
                <p>
                    6 inch cake $60 - 
                    8 inch cake $80 -
                    10 inch cake $100 -
                    12 inch cake $120
                </p>
                <h1 className="h">Tiered cakes please inquire for pricing</h1>
                <p>
                    Vegan: $25 -
                    Gluten Free: $25 -
                    Custom Inscription: $5 -
                    Fresh Florals: Market Price -
                </p>
                <h1 className="h">Cupcake Pricing</h1>
                <p>
                    Minis $24 per dozen (2 dozen minimum to order)<br/>
                    Standard: $30 per dozen (1 dozen minimum to order)
                </p>
            </div>
        </div>
    )
}

export default Pricing;