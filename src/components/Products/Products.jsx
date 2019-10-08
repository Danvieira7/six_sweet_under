import React, { Component } from "react";
import Card from "../Card/Card";
import Pricing from "../Pricing/Pricing";
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
            showComp: false
        })    
    }

    cupcakeChange = () => {
        this.setState({
            properties: this.state.cupcake,
            property: this.state.cupcake[0],
            showComp: false
        })    
    }

    barsChange = () => {
        this.setState({
            properties: this.state.bars,
            property: this.state.bars[0],
            showComp: false
        })    
    }

    flavorsChange = () => {
        this.setState({
            properties: this.state.flavors,
            property: this.state.flavors[0],
            showComp: false
        })    
    }
    
    priceChange = () => {
        this.setState({
            showComp: true
        })
    }
    
    render(){
        const { property } = this.state;
        return(
            <div className="products" >
                <h1 className="products-title">Products</h1>
                <div className="product-wrapper ">
                    <div className="btn">
                        <i 
                            style={property.index === 0 ? {color: "transparent", cursor: "default"} : {color: "white"}} 
                            className="far fa-arrow-alt-circle-left" 
                            onClick={  
                                property.index === 0 ? () => "" : this.prevProperty
                            } 
                            />
                    </div>
                    <div className="content ">
                        <Tabs active={this.state.active} onChange={active => this.setState({active})}>
                            <div key="cake" onClick={this.cakeChange}>Cakes</div>
                            <div key="graveyards" onClick={this.cupcakeChange}>Graveyards</div>
                            <div key="bars" onClick={this.barsChange}>Bars</div>
                            <div key="flavors" onClick={this.flavorsChange}>Flavors</div>
                            <div key="pricing" onClick={this.priceChange}>Pricing</div>
                        </Tabs>
                        {this.state.showComp === true ? 
                        <Pricing /> : 
                        < Card property={property}/> }
                    </div>               
                    <div className="btn" >
                        <i 
                            className="far fa-arrow-alt-circle-right" 
                            onClick={  
                                property.index === this.state.properties.length - 1 ? () => "" : this.nextProperty
                            } 
                            style={property.index === this.state.properties.length  - 1 || this.state.showComp ? 
                                {color: "transparent", cursor: "default"} : 
                                {color: "white"}} 
                            />
                    </div>
                </div>
            </div>
        );
    };
}

export default Products;