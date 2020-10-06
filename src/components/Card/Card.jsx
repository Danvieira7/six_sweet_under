import React from "react";

import "./Card.css";

const Card = ({ property }) => {
    const { index, description, image, name } = property;
    return(
        <div id={ `card-${ index }` } className="card-"> 
            <img  src={ image } alt="" />
            <div className="details-wrapper">
                <h1 className="name">{ name }</h1>
                <p className="description">{ description }</p>
            </div>
        </div>
    )
}

export default Card;