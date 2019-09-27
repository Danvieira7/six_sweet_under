import React, { Component } from 'react';
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Hero from "./components/Hero/Hero";
import Toolbar from "./components/Toolbar/Toolbar";
import Backdrop from "./components/Backdrop/Backdrop";

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      SideDrawerOpen: false
    }
  }
  
  toggleClickHandler = () => {
    this.setState((prevState) => {
      // this sets the state to the oposite of the prevState
      return{SideDrawerOpen: !prevState.SideDrawerOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({SideDrawerOpen: false});
  };

  render(){
    let backdrop;
    if(this.state.SideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return(
      <div style={{height:"100%"}}> 
        <Toolbar
          drawerClickHandler={this.toggleClickHandler}
        />
        <SideDrawer show={this.state.SideDrawerOpen}/>
        {backdrop}
        
        <Hero/>
        <footer>
          Footer
        </footer>
      </div>
    );
  }
}

export default App;