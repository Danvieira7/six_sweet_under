import React from "react";

import "./Promotion.css"

const Promotion = props => {
    let modalClasses = "bg-modal";
    if(props.show) modalClasses = "bg-modal-open";

    return (       
       <div className={ modalClasses } onClick={ props.hide }>
            <div className="modal-content" >
                <button className="close-x" onClick={ props.hide }>+</button>
                <img className="modal-logo" src="https://i.imgur.com/jIu9duU.png" alt=""/>
                <h1 className="promo-h">October Specials</h1>
                <p>
                    Baker's choice of mixed treats for a sweet or scary surprise.<br/>
                    More info on the October Specials tab under Products.<br/>
                    <br/>
                    Take a bite if you dare!
                </p>
                <button className="close-btn" onClick={ props.hide }>Close</button>
            </div>
       </div>
    )
}

export default Promotion;