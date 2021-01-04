// VideoGallary
import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView } from "mdbreact";
import firebase from "../../firebase";
import YoutubePlayerComp from "./youtubeplayer";
import queryString from "query-string";

const VideoGallary = (props) => {
    const [nextPlays, setNextPlays] = React.useState({videos:[]});
    const [currentVideoId, setCurrentVideoId] = React.useState(0);
    const [nowPlaying, setNowPlaying] = React.useState({});
    const [isGallaryPage, setGallaryPage] = React.useState(false);
    
    React.useEffect(() => {
      
            if(window.location.pathname=="/gallary"){
            setGallaryPage(true)
            }
            else{
            setGallaryPage(false)
            }

            const fetchData = async () => {
              const db = firebase.firestore();
              const data = await db.collection("projects").doc('gallery');
              data.get().then(function(doc) {
                if (doc.exists) {
                  let location=props.location;
                  let vid=currentVideoId;
                  if(location){
                    if(location.search){
                      var search = queryString.parse(location.search);
                      vid=parseInt(search.VId);
                    }
                    setCurrentVideoId(vid)
                  }
                    console.log(" Document data:", doc.data());
                    setNextPlays(doc.data());
                    setNowPlaying(doc.data().videos[vid]);

                } else {
                  console.log("No such  document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });       
          };     
            fetchData();
          }, []);
          
  return (
<>
{(!isGallaryPage)&&
    <MDBCard
        className=" pt-3"
        // style={{ fontWeight: 300, maxWidth: "100%" }}
      >
          
        <MDBCardBody  >
          {/* <h2 className="h1-responsive font-weight-bold my-5 text-center">
            Section title
          </h2>
          <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit id
            laborum.
          </p> */}
          <MDBRow>
            <MDBCol md="12" lg="8"  style={{
                borderBottom: "3px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
              <div className="mb-4">
                   <YoutubePlayerComp youtubeId={nowPlaying.videoUrl}  youtubeHeightBrowser={"457px"} youtubeHeightMobile={'217px'}></YoutubePlayerComp>
              
                <div className="d-flex justify-content-between">
                  <p className="font-weight-bold dark-grey-text">
                    <MDBIcon far icon="clock" className="pr-2" />
                    {nowPlaying.title}
                  </p>
                  <a href="#!" className="deep-orange-text">
                    <h6 className="font-weight-bold">
                      {/* <MDBIcon icon="utensils" className="pr-2" /> */}
                      Video
                    </h6>
                  </a>
                </div>
                <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                  <a href="#!">
                    {nowPlaying.title}</a>
                </h3>
                <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">{nowPlaying.description}
                </p>
              </div>
            </MDBCol>

            <MDBCol md="12" lg="4">
        
             {(nextPlays.videos.map((video,index)=>

              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBRow>
                  <MDBCol md="5">
                    <MDBView hover rounded className="z-depth-1-half mb-4"   onClick={()=>{
        window.location.assign("/gallary/video/?VId="+index);
}}> 
                      <img
                        className="img-fluid"
                        src={"https://img.youtube.com/vi/"+video.videoUrl+"/mqdefault.jpg"}
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="7">
                    <p  style={{ fontWeight:" 200 !important" }} className=" font-weight-bold dark-grey-text">
                      {video.title}
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                        {video.description}

                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
             ))}
           
              </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
}

{(isGallaryPage)&&

<MDBCard
className=" pt-2"
// style={{ fontWeight: 300, maxWidth: "100%" }}
>
<MDBCardBody  >
  <h2 className="h4-responsive font-weight-bold ml-2 pt-0">
    Video Gallary
  </h2>
  {/* <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
    Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit id
    laborum.
  </p> */}
  
  <MDBRow>
  {(nextPlays.videos.map((video,index)=>


    
  <MDBCol md="6">
    <MDBRow>
    <MDBCol md="6">
      <MDBView hover rounded className="z-depth-1-half mb-4" 
      onClick={()=>{
        window.location.assign("/gallary/video/?VId="+index);
}}>
        <img
          className="img-fluid"
          src={"https://img.youtube.com/vi/"+video.videoUrl+"/mqdefault.jpg"}
          alt=""
        />
        <a href="#!">
          <MDBMask overlay="white-slight" className="waves-light" />
        </a>
      </MDBView>
    </MDBCol>
    <MDBCol md="6">
      <p  style={{ fontWeight:" 200 !important" }} className=" font-weight-bold dark-grey-text">
        {video.title}
      </p>
      <div className="d-flex justify-content-between">
        <MDBCol size="11" className="text-truncate pl-0 mb-3">
          <a href="#!" className="dark-grey-text">
          {video.description}
          </a>
        </MDBCol>
        <a href="#!">
          <MDBIcon icon="angle-double-right" />
        </a>
      </div>
    </MDBCol>
  </MDBRow>
  </MDBCol>
// </div>
))}
  </MDBRow>

    </MDBCardBody>
    </MDBCard>
    }
</> );
}

export default VideoGallary;

// {(nextPlays.videos.map((video,index)=>