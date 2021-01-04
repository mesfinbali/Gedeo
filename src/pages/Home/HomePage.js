import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBFormInline,
  MDBBtn,
  MDBView,
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
  
} from 'mdbreact';
import './HomePage.css';
import { ReactComponent as Logo } from './../../assets/BFlogo.svg';

// import HomePageNew from './HomePageNew';
 import TeamPage from '../aboutus/team';
import HomeStart from '../../pages/Home/homeStart.js';
import CoursesPage from '../filmschool/team';
import WhatWeDoComponent from '../services/whatWeDo';
import ContactForm from '../contact/contactForm';
import CarouselProject from './carouselProject';
import RegisterSchool from '../filmschool/registerSchool';
import EcommercePage from './homeGallary';
import HomeTourism from './homeTourism';
import HomeCultures from './homeCulture'; 



class HomePage extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  componentDidMount() {
    document.querySelector('nav').style.height = '65px';

    window.scrollTo({ top: 0, behavior: "smooth" });

  }
  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }

  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    
    const navStyle = { marginTop: '4rem' };
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.handleTogglerClick}
      />
    );

    const { collapsed } = this.state;
    return (
      <>
    {/* CoursesPage, HomeCultures   HomeTourism */}
       <HomeStart></HomeStart>
      <CoursesPage  ></CoursesPage>
      <div id='parallaxintro'>
        
        <MDBView className='mdbparallaxHeader '
          src={'https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/126404678_212481473606700_4787511284135086667_o.jpg?_nc_cat=102&ccb=2&_nc_sid=cdbe9c&_nc_ohc=JICjdbQKDGwAX-Wtcqq&_nc_ht=scontent.fadd1-1.fna&oh=a4b006ac110ab307f7b1afe5117583ae&oe=5FF19D59'}
          fixed
        >
          <MDBMask className='rgba-black-light gradient' color="mdb-color darken-2"/>
          {/* <MDBMask className='d-flex justify-content-center align-items-center gradient' /> */}

          <MDBContainer
  className='d-flex justify-content-center align-items-center'
  style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
>
  <MDBRow>
    <MDBCol md='12' className='mb-4 white-text text-center'>
    
    </MDBCol>
  </MDBRow>

</MDBContainer>

<MDBContainer
  className='d-flex justify-content-center align-items-center'
  style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
>
  <MDBRow>
    <MDBCol md='12' className='mb-4 white-text text-center'>
    
    </MDBCol>
  </MDBRow>

</MDBContainer>

<MDBContainer
  className='d-flex justify-content-center align-items-center'
  style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
>
  <MDBRow>
    <MDBCol md='12' className='mb-4 white-text text-center'>
    
    </MDBCol>
  </MDBRow>

</MDBContainer>

          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
             
                <h1 className='display-3 mb-0 pt-md-2 pt-2 white-text font-weight-bold'>
                  KNOW
                  <span className='indigo-text font-weight-bold'> GEDEO</span>
                </h1>
                <hr className='hr-light my-2' />
              </MDBCol>
            </MDBRow>

          </MDBContainer>
          
        </MDBView>


</div>  

<EcommercePage></EcommercePage>

      
      <div id='parallaxintro'  >
        
        <MDBView className='mdbparallaxHeader '
          src={'https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/133760747_113861257254099_3840712719436158543_n.jpg?_nc_cat=103&ccb=2&_nc_sid=0debeb&_nc_ohc=PsORpIDNyrEAX9s4cTJ&_nc_ht=scontent.fadd1-1.fna&oh=09d7774d56c558416da73f4132ffe897&oe=60171524'}
          fixed
        >
          <MDBMask className='rgba-black-light gradient' color="mdb-color darken-2"/>
          {/* <MDBMask className='d-flex justify-content-center align-items-center gradient' /> */}


          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
              
              </MDBCol>
            </MDBRow>

          </MDBContainer>

<MDBContainer
  className='d-flex justify-content-center align-items-center'
  style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
>
  <MDBRow>
    <MDBCol md='12' className='mb-4 white-text text-center'>
    
    </MDBCol>
  </MDBRow>

</MDBContainer>

<MDBContainer
  className='d-flex justify-content-center align-items-center'
  style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
>
  <MDBRow>
    <MDBCol md='12' className='mb-4 white-text text-center'>
    
    </MDBCol>
  </MDBRow>

</MDBContainer>

<MDBContainer
  className='d-flex justify-content-center align-items-center'
  style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
>
  <MDBRow>
    <MDBCol md='12' className='mb-4 white-text text-center'>
    
    </MDBCol>
  </MDBRow>

</MDBContainer>
        </MDBView>


</div >  
      <HomeTourism  ></HomeTourism>
      <div id='parallaxintro'>
        
        <MDBView className='mdbparallaxHeader '
          src={'https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/133729885_113861303920761_4050367679056109053_n.jpg?_nc_cat=104&ccb=2&_nc_sid=0debeb&_nc_ohc=p5bgc0_YFWgAX9k1kl1&_nc_ht=scontent.fadd1-1.fna&oh=8c1e9f30521879e47d68e390768e0d63&oe=6017504B'}
          fixed
        >
          <MDBMask className='rgba-black-light gradient' color="mdb-color darken-2"/>
          {/* <MDBMask className='d-flex justify-content-center align-items-center gradient' /> */}

          <MDBContainer
  className='d-flex justify-content-center align-items-center'
  style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
>
  <MDBRow>
    <MDBCol md='12' className='mb-4 white-text text-center'>
    
    </MDBCol>
  </MDBRow>

</MDBContainer>

<MDBContainer
  className='d-flex justify-content-center align-items-center'
  style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
>
  <MDBRow>
    <MDBCol md='12' className='mb-4 white-text text-center'>
    
    </MDBCol>
  </MDBRow>

</MDBContainer>

<MDBContainer
  className='d-flex justify-content-center align-items-center'
  style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
>
  <MDBRow>
    <MDBCol md='12' className='mb-4 white-text text-center'>
    
    </MDBCol>
  </MDBRow>

</MDBContainer>

          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', paddingTop: '2.5rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
             
                <h1 className='display-3 mb-0 pt-md-2 pt-2 white-text font-weight-bold'>
                  KNOW
                  <span className='indigo-text font-weight-bold'> GEDEO</span>
                </h1>
                <hr className='hr-light my-2' />
              </MDBCol>
            </MDBRow>

          </MDBContainer>
          
        </MDBView>


</div>  


<HomeCultures   ></HomeCultures>
           
      </>
    );
  }
}

export default HomePage;
