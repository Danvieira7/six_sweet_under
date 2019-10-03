import React, { Component } from "react";
import Card from "../Card/Card";
import imageService from "../../utils/imageService";

import "./Products.css";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: [],
            property: "",
            bolo: [],
            active: "bolo"
        }
    }

    async componentDidMount() {
        const data = await imageService.getImages()
        const bolo = data.filter( b => b.category === "bolo");
        const cupcake = data.filter( c => c.category === "cupcake");

        this.setState({
            properties: bolo,
            property: bolo[0]
        })
    }

    nextProperty = () => {
        const newIndex = this.state.property.index +1;
        this.setState({
            property: this.state.properties[newIndex]
        })
    }
        
    prevProperty = () => {
        const newIndex = this.state.property.index - 1;
        this.setState({
          property: this.state.properties[newIndex]
        })
    }
    
    render(){
        const { property } = this.state;
        return(
            <div className="product-wrapper ">
                <div className="btn">
                    <button onClick={this.prevProperty} disabled={property.index === 0}> prev</button>
                </div>
                <div className="content ">
                    < Card property={property}/> 
                </div>               
                <div className="btn">
                    <button onClick={this.nextProperty} disabled={property.index === this.state.properties.length - 1}> next</button>
                </div>
            </div>
        );
    };
}

export default Products;