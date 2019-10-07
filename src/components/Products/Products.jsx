import React, { Component } from "react";
import Card from "../Card/Card";
import Tabs from "../Tabs/Tabs";
import imageService from "../../utils/imageService";

import "./Products.css";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: [],
            property: "",
            bolo: [],
            bars: [],
            flavors: [],
            cupcake: []
        }
    }

    async componentDidMount() {
        const data = await imageService.getImages()
        const bolo = data.filter( b => b.category === "bolo");
        const bars = data.filter( b => b.category === "bars");
        const flavors = data.filter( b => b.category === "flavors");
        const cupcake = data.filter( c => c.category === "cupcake");
        this.setState({
            properties: bolo,
            property: bolo[0],  
            bolo: bolo,
            cupcake: cupcake,
            bars: bars,
            flavors: flavors,
            active: "cake",
            showComp: false
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
    
    cakeChange = () => {
        this.setState({
            properties: this.state.bolo,
            property: this.state.bolo[0],
        })    
    }

    cupcakeChange = () => {
        this.setState({
            properties: this.state.cupcake,
            property: this.state.cupcake[0],
        })    
    }

    barsChange = () => {
        this.setState({
            properties: this.state.bars,
            property: this.state.bars[0],
        })    
    }

    flavorsChange = () => {
        this.setState({
            properties: this.state.flavors,
            property: this.state.flavors[0],
        })    
    }
    
    render(){
        const { property } = this.state;
        return(
            <div className="products" id="products">
                <h1 className="products-title">Products</h1>
                <div className="product-wrapper ">
                    <div className="btn">
                        <i 
                            style={{color: "white"}}
                            className="fas fa-chevron-left" 
                            onClick={  
                                property.index === 0 ? () => "" : this.prevProperty
                            } 
                            disabled={property.index === 0}
                        />
                    </div>
                    <div className="content ">
                        <Tabs active={this.state.active} onChange={active => this.setState({active})}>
                            <div key="cake" onClick={this.cakeChange}>Cakes</div>
                            <div key="graveyards" onClick={this.cupcakeChange}>Graveyards</div>
                            <div key="bars" onClick={this.barsChange}>Bars</div>
                            <div key="flavors" onClick={this.flavorsChange}>Flavors</div>
                            <div key="pricing" onClick={this.cupcakeChange}>Pricing</div>
                        </Tabs>
                        < Card property={property}/> 
                    </div>               
                    <div className="btn" style={{color: "white"}}>
                        <i 
                            className="fas fa-chevron-right" 
                            onClick={  
                                property.index === this.state.properties.length - 1 ? () => "" : this.nextProperty
                            } 
                            disabled={property.index === this.state.properties.length - 1}
                        />
                    </div>
                </div>
            </div>
        );
    };
}

export default Products;