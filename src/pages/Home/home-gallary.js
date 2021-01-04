import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";
import "./homeGallary.css"
const EcommercePage = () => {
  return (
  <div className="gallarybg pt-5 pb-5">
  <MDBContainer>
      
    <section className="text-center my-5">
      <h1 className="h1-responsive font-weight-bold text-center my-3">
        Gallery
      </h1>
      {/* <p className="grey-text text-center w-responsive mx-auto mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p> */}
      <MDBRow>
        <MDBCol lg="6" md="6" className="mb-lg-0 mt-5  mb-5">
          <MDBCard collection className="z-depth-1-half">
            <div className="view viewGallery zoom">
              <img
                         src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/129232642_103012098339015_4918215099290192828_o.jpg?_nc_cat=102&ccb=2&_nc_sid=0debeb&_nc_ohc=DYMvnnVZIrgAX-wceC0&_nc_ht=scontent.fadd1-1.fna&oh=19f0b34e0eb8be7510f58e7ce1721190&oe=5FEE763E"
                         className="img-fluid"
                alt=""
              />
              <div className="stripe dark z-index-2">
                <a href="/Gallary/album/?fbId=111880957452129">
                  <p>
                    Tour <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="6" md="6" className="mb-lg-0 mt-5 mb-5">
          <MDBCard collection className="z-depth-1-half">
            <div className="view viewGallery zoom">
              <img
              src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/129353432_103012078339017_3976520243511596796_o.jpg?_nc_cat=100&ccb=2&_nc_sid=0debeb&_nc_ohc=9P6rYHn_HGUAX-6p6dO&_nc_ht=scontent.fadd1-1.fna&oh=75033eca04ec1cdb37292604eeaba837&oe=5FF116ED"         
         className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="/Gallary/album/?fbId=111879994118892">
                  <p>
                    People <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="6" md="6" className="mb-lg-0 mt-5 mb-5">
          <MDBCard collection className="z-depth-1-half">
            <div className="view viewGallery zoom">
              <img
              src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/131930590_111879637452261_5674409796406651156_n.jpg?_nc_cat=106&ccb=2&_nc_sid=0debeb&_nc_ohc=s6uNwg5U0tMAX8bR9Bt&_nc_ht=scontent.fadd1-1.fna&oh=cce1dfbc9ce5710a31d7b062dbe43853&oe=600EBDB0"
              className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="/Gallary/album/?fbId=111909114115980">
                  <p>
                    Culture <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="6" md="6" className="mb-lg-0 mt-5 mb-5">
          <MDBCard collection className="z-depth-1-half">
            <div className="view viewGallery zoom">
              <img
               src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.0-9/129242838_103012058339019_4829770972260604389_o.jpg?_nc_cat=110&ccb=2&_nc_sid=0debeb&_nc_ohc=Sf7eKfI-jnkAX8MyTEz&_nc_ht=scontent.fadd1-1.fna&oh=7d0b03494532b5dcc46b63e548ef4be9&oe=5FEF8924"
               className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="/Gallary/album/?fbId=111900044116887">
                  <p>
                    Coffee <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
     
      </MDBRow>
    </section>
  
    </MDBContainer>
    </div>
  );
}

export default EcommercePage;