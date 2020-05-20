import React from "react";

import "./Promotion.css"

const Promotion = props => {
    let modalClasses = "bg-modal";
    if(props.show) {
        modalClasses = "bg-modal-open";
    }
    return (       
       <div className={ modalClasses }>
            <div className="modal-content">
                <button className="close-x" onClick={props.hide}>+</button>
                <img className="modal-logo" src="https://i.imgur.com/jIu9duU.png" alt=""/>
                <h1 className="promo-h">Trick Or Treat Box</h1>
                <p>
                    You can get a taste of Chef Callista Mei’s own deadly delicious desserts <br />
                    delivered to your door!<br /> 
                    Sold out last round so get your orders in by the 20th!<br />
                    More Info on the Trick Or Treat Tab Under Products.
                </p>
                <button className="close-btn" onClick={props.hide}>click here to close</button>
            </div>
       </div>
    )
}

export default Promotion;
