import React from "react";
import "./Card.css";

const Card = ({property}) => {
    const {index, description, image, name, price} = property;
    return(
        <div id={`card-${index}`} className="card">
            
            <div className="image-wrapper">
                <img  src={image}/>
            </div>
            <div className="details-wrapper">
                <h1 className="name">{ name }</h1>
                <p className="description"> {description} </p>
            </div>
            <hr/>
        </div>
    )
}

export default Card;