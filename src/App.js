
import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink,
  MDBTooltip,
  MDBIcon
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/BFlogo.svg';
import Routes from './Routes';
import FooterPage from './components/footer/FooterPage';
import NavBar from "./components/Header/navbar.js"
import firebase from "./firebase";

class App extends Component {
 

  render() {
  

    return (
      
      <Router>
      <div className='flyout'  >
     
    <NavBar  pageWrapId={'page-wrap'} outerContainerId={'outer-container'} ></NavBar>
      {/* <SideBarComp pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> */}
    
          {/* <main style={{ marginTop: '4rem' }}> */}
          <main>
            <Routes />
          </main>
          <FooterPage></FooterPage>
          </div>
      </Router>
    );
  }
}

export default App;
