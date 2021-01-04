
import React, { Component } from 'react';
import {
  
   MDBAlert, 
  MDBInput,
  MDBBtn,MDBAnimation,
  MDBIcon, 
} from 'mdbreact';
import SectionContainer from '../../components/sectionContainer';
import "./registerForm.css"
import firebase from "../../firebase";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

class RegisterForm extends Component {

  state = {
    IframeWidth:isMobile?"320":"700",
    validated: false,
    isLoading: false,
    validateResultText:null,
    name: null,
    email : null,
    branch : null,
    phone: null,
    message: null,
    modal: false,
    activeItemOuterTabs: "1",
    activeItemInnerPills: "1",
  };

  toggle = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal
    });
  };
 
      submitContact = async () => {
          let newDate=new Date();
   let newMessage ={ 
     registeredDate: newDate,
     name: this.state.name,
    email: this.state.email, 
    phone: this.state.phone,
    message: this.state.message,
    branch: this.state.branch,
    }
    console.error("newMessage writing document: ", newMessage);
    this.setState({isLoading:true});
    if(this.state.phone&&this.state.name){
  
      const db = firebase.firestore();
      const data = await  db.collection("FilmSchool").doc("Register").update({
        newStudents:   firebase.firestore.FieldValue.arrayUnion(newMessage)
    })
    .then(function( data) {
        // console.log("Document successfully written!" ); 
    })
    .catch(function(error) {
        // console.error("Error writing document: ", error);
    }); 
      this.setState(
        {isLoading:false,
           validateResultText:"You have successfully Registered, we will cantact you in your address",
          
        })
    }
else{
  this.setState({isLoading:false,validateResultText:"Please enter Name or Phone inputs properly!"})

}
  }  

  render() {
    const { modal } = this.state;

    return (
       
            
             
          <MDBAnimation type='zoomIn' duration='500ms'>
     
            <SectionContainer className='z-depth-2   '>
            <p className='h5 text-center mb-2'>Fill the below form properly to Register!
                 </p>   
          <form  className=' text-left p-2'>
              
              <div className='grey-text'>
                <MDBInput md='6'
                  label='Full Name'
                  icon='user'
                  group
                  value={this.state.name}
                  onChange={(value)=>{this.setState({name:value.target.value})}}
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                />
                <MDBInput md='6'
                  value={this.state.email }
                  onChange={(value)=>{this.setState({email :value.target.value})}}
                  label='Email'
                  icon='envelope'
                  group
                  type='email'
                  validate
                  error='wrong'
                  success='right'
                />
                <MDBInput
                  value={this.state.phone}
                  onChange={(value)=>{this.setState({phone:value.target.value})}}
                  label='Phone'
                  icon='phone'
                  group
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                />
                
        <select className="browser-default custom-select m-2" 
                  onChange={(value)=>{this.setState({branch:value.target.value})}}>
          <option>Choose Your Branch</option>
          <option value="Addis Abeba">Addis Abeba</option>
          <option value="Adama">Adama</option>
          <option value="Arba Minch">Arba Minch</option>
          <option value="Bahr Dar">Bahr Dar</option>
          <option value="Dessie">Dessie</option>
          <option value="Dilla">Dilla</option>
          <option value="Hawassa">Hawassa</option>
          <option value="Hossana">Hossana</option>
          <option value="Jima">Jima</option>
        </select>
                <MDBInput
                  value={this.state.message}
                  onChange={(value)=>{this.setState({message:value.target.value})}}
                  type='textarea'
                  rows='2'
                  label='Any message?'
                  icon='pencil-alt'
                />
              </div>

 {((this.state.validateResultText) && (this.state.isLoading === false)) &&
                           <MDBAlert color="danger" >
                         {this.state.validateResultText}
                         </MDBAlert>
                         
                  }


                          {this.state.isLoading &&

<div className='text-center'>
<MDBBtn outline color='secondary' disabled>
                                  <div className="spinner-grow spinner-grow-sm text-success" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    
                              Submiting...
                              </MDBBtn>
 </div>
 }

                          {(this.state.isLoading === false) &&
                            
              <div className='text-center'>
                <MDBBtn outline color='secondary' onClick={()=>{this.submitContact()}}>
                REGISTER <MDBIcon icon='paper-plane' className='ml-1' />
              </MDBBtn>
              </div>
                          }

            </form>
 
         
        
    
    
   
            </SectionContainer>
     </MDBAnimation> 
  
     );
  }
}

export default RegisterForm;
