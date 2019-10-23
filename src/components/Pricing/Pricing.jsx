import React from "react";

import "./Pricing.css";

const Pricing = () => {
    return(
        <div className="pricing"> 
            <div className="pricing_content">
                <h1 className="h">All cakes are 3 layers with American Buttercream</h1>
                <p>
                    6 inch cake $60 - 8 inch cake $80 <br/>
                    10 inch cake $100 - 12 inch cake $120
                </p>
                <h1 className="h"> For tiered cakes, please inquire</h1>
                <h2>Additional Costs</h2>
                <p>
                    Vegan: $15 <br/>
                    Gluten Free: $15 <br/>
                    Custom Inscription: $5 <br/>
                    Fresh Florals: Market Price 
                </p>
                <h1 className="h">Graveyards</h1>
                <p>
                    $48 per dozen (6oz each)<br/>
                    1 dozen minimum to order and 1 flavor per dozen.
                </p>
                <h1 className="h">Bars</h1>
                <p>
                    $70 per tray (24 pieces)<br/>
                    1 tray minimum to order and 1 flavor per tray.
                </p>                
                <h1 className="h">Cupcakes</h1>
                <p>
                    Minis $24 per dozen (2 dozen minimum to order)<br/>
                    Standard: $30 per dozen (1 dozen minimum to order)
                </p>
            </div>
        </div>
    )
}

export default Pricing;