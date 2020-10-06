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
            data: [],
            properties: [],
            property: ""
        }
    }
    
    async componentDidMount() {
        const data = await imageService.getImages();
        const bolo = await data.filter( b => b.category === "box");
        this.setState({
            data: data,
            properties: bolo,
            property: bolo[0],  
            active: "box",
            showComp: false
        })
        console.log(data)
    }

    nextProperty = () => {
        const newIndex = this.state.property.index +1;
        this.setState({
            property: this.state.properties[newIndex]
        });
    }
        
    prevProperty = () => {
        const newIndex = this.state.property.index - 1;
        this.setState({
          property: this.state.properties[newIndex]
        });
    }
    
    handleChange = e => {
        const properties = this.state.data.filter( item => item.category === e.currentTarget.id);
        this.setState({
            properties: properties,
            property: properties[0],
            showComp: false
        });
    }
    
    priceChange = () =>  this.setState({ showComp: true });
    
    render() {
        const { property } = this.state;
        return(
            <div className="products">
                <h1 className="products-title"> Products </h1>
                <div className="product-wrapper ">
                    <div className="btn">
                        <i 
                            style={ property.index === 0 || this.state.showComp ? { color: "transparent", cursor: "default" } : { color: "white" }} 
                            className="far fa-arrow-alt-circle-left" 
                            onClick={ property.index === 0 ? () => "" : this.prevProperty } 
                        />
                    </div>
                    <div className="content">
                        <Tabs active={ this.state.active } onChange={ active => this.setState({active}) }>
                            <div id="box" onClick={ this.handleChange }>October Specials</div>
                            <div id="bolo" onClick={ this.handleChange }>Cakes</div>
                            <div id="cupcake" onClick={ this.handleChange }>Graveyards</div>
                            <div id="bars" onClick={ this.handleChange }>Bars</div>
                            <div id="flavors" onClick={ this.handleChange }>Flavors</div>
                            <div id="pricing" onClick={ this.priceChange }>Pricing</div>
                        </Tabs>
                        { this.state.showComp === true ? <Pricing /> : < Card property={ property } /> }
                    </div>               
                    <div className="btn">
                        <i 
                            className="far fa-arrow-alt-circle-right" 
                            onClick={ property.index === this.state.properties.length - 1 ? () => "" : this.nextProperty } 
                            style={ property.index === this.state.properties.length  - 1 || this.state.showComp ? 
                                { color: "transparent", cursor: "default" } : { color: "white" }
                            } 
                        />
                    </div>
                </div>
            </div>
        );
    };
}

export default Products;