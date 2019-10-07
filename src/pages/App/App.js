import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import ImageForm from "../ImagesFormPage/ImagesFormPage"
import HomePage from "../HomePage/HomePage";
import Toolbar from "../../components/Toolbar/Toolbar";
import Backdrop from "../../components/Backdrop/Backdrop";

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
        <Toolbar drawerClickHandler={this.toggleClickHandler}/>
        <SideDrawer show={this.state.SideDrawerOpen}/>
        {backdrop} 
        <Switch>
          <Route exact path="/" render={(props) => ( 
            <HomePage {...props}/> 
          )}/>
          <Route exact path="/upload" render={(props) => (
            <ImageForm {...props}/> 
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;