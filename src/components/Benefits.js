import React from 'react'
import '../assets/ComponentDesign/square.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Benefits = () => {
  return (
   <div >
      
    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true"  duration="0.7">
    <div id='benefits'>
    <div id="service" class="service">
      <div class="container">
         <div class="row">
           
            <div className="heading_main text_align_center" style={{paddingTop:"70px"}}>
						   <h2 style={{color:"#E5E4E2"}}>Benefits</h2>
                        </div>
         </div>


         
         <div  className="row text-center">
           
         
         <div className="col-md-4 col-sm-6">
            <div id="ho_color" class="service_box">
            <i class="fa fa-4x fa-trophy" style={{marginTop: "30px",color:"#E5E4E2"}} aria-hidden="true" ></i>
                <h3 style={{marginLeft:"0px", marginTop:"20px",color:"#E5E4E2"}}>International Competitions</h3> 
               {/* <p style={{marginLeft:"15px"}}>{object.text}</p> */}
            </div>
         </div>
         
         <div className="col-md-4 col-sm-6">
            <div id="ho_color" class="service_box">
            <i class="fa fa-4x fa-users" style={{marginTop: "30px",color:"#E5E4E2"}} aria-hidden="true"></i>
                <h3 style={{marginLeft:"0px", marginTop:"20px",color:"#E5E4E2"}}>Interaction with Professionals</h3> 
               {/* <p style={{marginLeft:"15px"}}>{object.text}</p> */}
            </div>
         </div><div className="col-md-4 col-sm-6">
            <div id="ho_color" class="service_box">
            <i class="fa fa-4x fa-bell" style={{marginTop: "30px",color:"#E5E4E2"}} aria-hidden="true"></i> 
                <h3 style={{marginLeft:"0px", marginTop:"20px",color:"#E5E4E2"}}>Awareness of Technology</h3> 
               {/* <p style={{marginLeft:"15px"}}>{object.text}</p> */}
            </div>
         </div><div className="col-md-4 col-sm-6">
            <div id="ho_color" class="service_box">
            <i class="fas fa-4x fa-tasks" style={{marginTop: "30px",color:"#E5E4E2"}} aria-hidden="true"></i>
                <h3 style={{marginLeft:"0px", marginTop:"20px",color:"#E5E4E2"}}>Tech Workshops</h3> 
               {/* <p style={{marginLeft:"15px"}}>{object.text}</p> */}
            </div>
         </div><div className="col-md-4 col-sm-6">
            <div id="ho_color" class="service_box">
            <i class="fa fa-4x fa-desktop" style={{marginTop: "30px",color:"#E5E4E2"}} aria-hidden="true"></i>
                <h3 style={{marginLeft:"0px", marginTop:"20px",color:"#E5E4E2"}}>Opportunity for projects</h3> 
               {/* <p style={{marginLeft:"15px"}}>{object.text}</p> */}
            </div>
         </div>
         <div className="col-md-4 col-sm-6">
            <div id="ho_color" class="service_box">
            <i class="fa fa-4x fa-thumbs-up" style={{marginTop: "30px",color:"#E5E4E2"}} aria-hidden="true"></i>
                <h3 style={{marginLeft:"0px", marginTop:"20px",color:"#E5E4E2"}}>Awesome Team :)</h3> 
               {/* <p style={{marginLeft:"15px"}}>{object.text}</p> */}
            </div>
         </div>

     
            </div>
           
         
      </div>
   </div>
   </div>
   </AnimationOnScroll>
   </div>
  )
}

export default Benefits
