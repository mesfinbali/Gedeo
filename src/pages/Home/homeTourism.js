import React from "react";
import {MDBContainer,  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

const HomeTourism = () => {
  return (
    <>
    
    {(!(window.location.pathname==""||window.location.pathname=="/"))&&
    <div id='parallaxintro'>
                
                <MDBView className='mdbparallaxHeader '
                  src='https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/126404678_212481473606700_4787511284135086667_o.jpg?_nc_cat=102&ccb=2&_nc_sid=cdbe9c&_nc_ohc=JICjdbQKDGwAX-Wtcqq&_nc_ht=scontent.fadd1-1.fna&oh=a4b006ac110ab307f7b1afe5117583ae&oe=5FF19D59'
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
        
             
                  
                </MDBView>
        
        
        </div>  
     }   
    <MDBCard className="  px-5 pb-5">
      <MDBCardBody className="text-center">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Tourism
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView hover className="rounded z-depth-2 mb-4" waves>
              <img
                className="img-fluid"
                src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/130064623_107422427897982_259498274184803423_o.jpg?_nc_cat=110&ccb=2&_nc_sid=0debeb&_nc_ohc=RsCbSxO_awMAX8-d8RK&_nc_ht=scontent.fadd1-1.fna&oh=800de710c8d47f9fe4c5fd56fb5ab0aa&oe=6015EB7E"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
            <a className="pink-text">
              <h4 className="font-weight-bold mb-3">
                <MDBIcon icon="map" className="pr-2" />
                Attractions
              </h4>
            </a> 
            {/* <p>
              by <a href="#!" className="font-weight-bold">Billy Forester</a>,
              15/07/2018
            </p> */}
            <p className="dark-grey-text">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus
              voluptas.
            </p>
            <MDBBtn color="pink"  rounded size="md" href="Posts/album/?name=Attractions&fbId=111895950783963">
              Read more
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView hover className="rounded z-depth-2 mb-4" waves>
              <img
                className="img-fluid"
                src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/129981697_107204551253103_6093993700734510624_o.jpg?_nc_cat=104&ccb=2&_nc_sid=0debeb&_nc_ohc=vZBGXhO7ZqUAX-Y81_2&_nc_ht=scontent.fadd1-1.fna&oh=40879d5f9434688d4776a2b4f755bb9d&oe=6011947B"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
            <a href="Posts/album/?name=Attractions&fbId=107205927919632" className="deep-orange-text">
              <h4 className="font-weight-bold mb-3">
                <MDBIcon icon="film" className="pr-2" />
                Events
              </h4>
            </a> 
            
            
            <p className="dark-grey-text">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis voluptatum deleniti atque corrupti quos dolores.
            </p>
            <MDBBtn color="deep-orange" rounded size="md" href="Posts/album/?name=Attractions&fbId=107205927919632" >
              Read more
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView hover className="rounded z-depth-2 mb-4" waves>
              <img
                className="img-fluid"
                src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/133837777_114220540551504_4010544023672840765_n.jpg?_nc_cat=105&ccb=2&_nc_sid=0debeb&_nc_ohc=0g7Nck5Z-kYAX9i2hET&_nc_ht=scontent.fadd1-1.fna&oh=749a62727a29165328a4c7453370c0f2&oe=6011C26D"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
            <a href="Posts/album/?name=Attractions&fbId=111878340785724" className="blue-text">
              <h4 className="font-weight-bold mb-3">
                <MDBIcon icon="fire" className="pr-2" />
                Places
              </h4>
            </a> 
            
            <p className="dark-grey-text">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione.
            </p>
            <MDBBtn color="info" rounded size="md"  href="Posts/album/?name=Attractions&fbId=111878340785724">
              Read more
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
 </> );
}

export default HomeTourism;