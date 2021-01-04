import React from "react";
import {  MDBRow, MDBCol,MDBContainer, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBadge, MDBBtn } from "mdbreact";
import "./homeCulture.css"
const HomeCultures = () => {

  const newsStyle = {
    borderBottom: "1px solid #e0e0e0",
    marginBottom: "1.5rem"
  };

  return (<>

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

    <MDBCard
        className="  px-5 culturebg"
        style={{ fontWeight: 300, maxWidth: "100%" }}
      >
        <MDBCardBody style={{ paddingTop: 0 }}>
          <h2 className="h1-responsive font-weight-bold my-5 text-center">
            Culture
          </h2>
          <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit id
            laborum.
          </p>
          <MDBRow>
            <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
              <MDBView hover rounded className="z-depth-1-half mb-4 viewCulture">
                <img
                  className="img-fluid"
                  src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/129953145_108107651162793_5868235056102455066_o.jpg?_nc_cat=110&ccb=2&_nc_sid=0debeb&_nc_ohc=b9xjlINNiw4AX8xMCEu&_nc_ht=scontent.fadd1-1.fna&oh=5a0a6f6d4bbddd0851c23b0e16bcf875&oe=601678C6"
                  alt=""
                />
                <a href="Posts/album/?name=Music&fbId=108049024501989">
                  <MDBMask overlay="white-slight" className="waves-light" />
                </a>
              </MDBView>
              <MDBRow className="mb-3 text-center">
                <MDBCol size="12">
                  <a href="Posts/album/?name=Music&fbId=108049024501989">
 
                    
                    <MDBBtn   color="success  " outline><MDBIcon icon="leaf" className="pr-2  " aria-hidden="true" />
                    <span className="font-weight-bold"> Music</span> 
                    </MDBBtn> 
                  </a>
                </MDBCol>
              </MDBRow> 
 
            </MDBCol>

            <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
              <MDBView hover rounded className="z-depth-1-half mb-4 viewCulture">
                <img
                  className="img-fluid"
                  src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/130231337_108107744496117_5348026804366619315_o.jpg?_nc_cat=104&ccb=2&_nc_sid=0debeb&_nc_ohc=0oCKCQQvidYAX-Igyx-&_nc_ht=scontent.fadd1-1.fna&oh=4ef4493212ef8cc20aaa25bbed5f2ee9&oe=60193344"
                  alt=""
                />
                <a href="Posts/album/?name=Festivals&fbId=107239254582966">
                  <MDBMask overlay="white-slight" className="waves-light" />
                </a>
              </MDBView>
              <MDBRow className="mb-3  text-center">
                <MDBCol size="12">
                  <a href="Posts/album/?name=Festivals&fbId=107239254582966"> 
                    <MDBBtn   color="success  " outline><MDBIcon icon="leaf" className="pr-2  " aria-hidden="true" />
                    <span className="font-weight-bold"> Festivals</span> 
                    </MDBBtn> 
                  

                  </a>
                </MDBCol>
              </MDBRow> 
              
              </MDBCol>

            <MDBCol md="12" lg="4" className="mb-lg-0 mb-5  ">
              <MDBView hover rounded className="z-depth-1-half mb-4 viewCulture">
                <img
                  className="img-fluid"
                  src="https://scontent.fadd1-1.fna.fbcdn.net/v/t31.0-8/25189102_1429714323812094_9217341967407235736_o.jpg?_nc_cat=103&ccb=2&_nc_sid=8bfeb9&_nc_ohc=mdHXj3yhoXMAX-jYD_a&_nc_ht=scontent.fadd1-1.fna&oh=dbe4a57ba55304426d75703da628db1e&oe=60197C65"
                  alt=""
                />
                <a href="Posts/album/?name=Documentaries&fbId=111881804118711">
                  <MDBMask overlay="white-slight" className="waves-light" />
                </a>
              </MDBView>
              <MDBRow className="mb-3  text-center">
                <MDBCol size="12">
                  <a href="Posts/album/?name=Documentaries&fbId=111881804118711">
 
                    
                    <MDBBtn   color="success  " outline><MDBIcon icon="leaf" className="pr-2  " aria-hidden="true" />
                    <span className="font-weight-bold"> Documentaries</span> 
                    </MDBBtn> 
                  
                  </a>
                </MDBCol>
              </MDBRow> 
         
            </MDBCol>


            <MDBCol md="12" lg="6" className="mb-lg-0 mb-5 ">
              <MDBView hover rounded className="z-depth-1-half mb-4 viewCulture">
                <img
                  className="img-fluid"
                  src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/131891165_111908404116051_1641016692222034637_n.jpg?_nc_cat=106&ccb=2&_nc_sid=0debeb&_nc_ohc=kbw1G_2rIJMAX-o0SPl&_nc_ht=scontent.fadd1-1.fna&oh=52efa0b516deef51d18dae792aeed6fa&oe=60197B61"
                  alt=""
                />
                <a href="Posts/album/?name=Cultural-Foods&fbId=111907827449442">
                  <MDBMask overlay="white-slight" className="waves-light" />
                </a>
              </MDBView>
              <MDBRow className="mb-3  text-center">
                <MDBCol size="12">
                  <a href="Posts/album/?name=Cultural-Foods&fbId=111907827449442"   >
                     <MDBBtn   color="success  " outline><MDBIcon icon="leaf" className="pr-2  " aria-hidden="true" />
                    <span className="font-weight-bold"> Cultural Foods</span> 
                    </MDBBtn> 
                  </a>
                </MDBCol>
              </MDBRow> 
         
            </MDBCol>

            <MDBCol md="12" lg="6" className="mb-lg-0 mb-5">
              <MDBView hover rounded className="z-depth-1-half mb-4 viewCulture">
                <img
                  className="img-fluid"
                  src="https://img.youtube.com/vi/zwCzoO4PE50/maxresdefault.jpg"
                  alt=""
                />
                <a href="Posts/album/?name=Histories&fbId=111910240782534">
                  <MDBMask overlay="white-slight" className="waves-light" />
                </a>
              </MDBView>
              <MDBRow className="mb-3  text-center">
                <MDBCol size="12">
                  <a href="Posts/album/?name=Histories&fbId=111910240782534">
                     
                    <MDBBtn   color="success  " outline><MDBIcon icon="leaf" className="pr-2  " aria-hidden="true" />
                    <span className="font-weight-bold"> Histories</span> 
                    </MDBBtn> 
                  
                  </a>
                </MDBCol>
              </MDBRow> 
         
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>
 </> );
}

export default HomeCultures;