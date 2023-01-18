import React from 'react'
import { Link } from 'react-router-dom';
import content from '../assets/cms/content.json'
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Robocon2023 = () => {
  const myStyle={
    backgroundImage: 
"url('https://res.cloudinary.com/amuroboclub/image/upload/v1673816613/2022-23_website_react/About/background2.jpg')",
opacity: 0.98,
    // backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
};
  return (
    <div style={myStyle}>
        <nav class="navbar navbar-expand-lg navbar-dark elegant-color " >

 
<a class="navbar-brand" href="#"><Link to="/"><img src={ require('../assets/images/logo.jpeg')} style={{borderRadius:"10px"}} alt="image" /></Link></a>







</nav>




            <div className="heading_main text_align_center" style={{paddingTop:"25px"}}>
						   <h1 style={{color:"#E5E4E2", fontWeight:"bold", fontSize:"35px", margin:"0px"}}>ABU Robocon 2023</h1>
                        </div>
                        
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true"  duration="0.7">
                        <div className="section margin-top_50">
        <div className="container">
            <div className="row">
                
				<div className="col-md-6">
                    <div className="full" style={{paddingTop: "50px"}}>
                        <img src={content[0].robocon2023[0].images[0].image} alt="#" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="full" style={{paddingTop: "50px"}}>
                        <img src={content[0].robocon2023[0].images[1].image} alt="#" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </AnimationOnScroll>
   
                        <div className="section margin-top_50">
        <div className="container">
            <div className="row"><p style={{color:"#E5E4E2", textAlign: "justify", marginLeft:"10px", marginRight:"10px"}}>{content[0].robocon2023[0].description}</p>
              </div></div></div>


              

                        
    </div>
  )
}

export default Robocon2023;
