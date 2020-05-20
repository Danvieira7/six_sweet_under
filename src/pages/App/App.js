import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import ImageForm from "../ImagesFormPage/ImagesFormPage"
import HomePage from "../HomePage/HomePage";
import Toolbar from "../../components/Toolbar/Toolbar";
import Backdrop from "../../components/Backdrop/Backdrop";
import Promotion from "../../components/Promotion/Promotion"; 

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      SideDrawerOpen: false,
      modalShow: false
    }
  }
  componentDidMount() {
    setTimeout(() => { this.setState({ modalShow: true })}, 2000);
    document.body.style.overflowY = "hidden"
  }
  
  toggleClickHandler = () => {
    this.setState(prevState => {
      return{ SideDrawerOpen: !prevState.SideDrawerOpen };
    });
  };
  
  backdropClickHandler = () => {
    this.setState({ SideDrawerOpen: false });
  };
  
  closeModal = () => {
    this.setState({ modalShow : false });
    document.body.style.overflowY = "scroll"
  }
  render() {
    let backdrop;
    if(this.state.SideDrawerOpen) backdrop = <Backdrop click={ this.backdropClickHandler }/>   
    return(
      <div className="app"> 
        <Toolbar drawerClickHandler={ this.toggleClickHandler } />
        <SideDrawer show={ this.state.SideDrawerOpen } click={ this.backdropClickHandler }/>
        <Promotion show={ this.state.modalShow } hide={ this.closeModal }/>
        { backdrop } 
        <Switch>
          <Route exact path="/" render={ props => ( 
            <HomePage { ...props }/> 
          ) }/>
          <Route exact path="/upload" render={ (props) => ( 
            <ImageForm { ...props }/> 
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;