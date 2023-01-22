import React, {useRef, useState, useEffect} from 'react'
import Particles, { ISourceOptions } from "react-tsparticles";
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
// import './css/bootstrap.min.css';
// import './css/pogo-slider.min.css';
import './css/style.css';
// import './css/custom.css';
// import './css/responsive.css';
import LoadingSpinner from '../components/LoadingSpinner';
// import './css/responsiveslides.css';
import { Link } from "react-router-dom";
import Test from '../components/Test';
import Benefits from '../components/Benefits';
import Team from '../components/Team';
import Achievements from '../components/Achievements';

import '../assets/ComponentDesign/Navbar.css';
import '../assets/ComponentDesign/Hover.css';

// import ParticleBackground from 'react-particle-backgrounds'






import Location from '../components/Location';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Modals from '../components/Modals';
import Cards from '../components/Cards';
import emailjs from '@emailjs/browser';
import AnchorLink from "react-anchor-link-smooth-scroll";
// import PhotoGallery from '../components/PhotoGallery'
import Introduction from '../components/Introduction';

// import { grey, pink } from '@material-ui/core/colors';

// import { grey, pink, red } from '@material-ui/core/colors';
import content from "../assets/cms/content.json"
// import PhotoGallery from '../components/PhotoGallery';
const Home = () => {
    

 
  const myStyle={
    backgroundImage: 
"url('https://res.cloudinary.com/amuroboclub/image/upload/v1673816613/2022-23_website_react/About/background2.jpg')",
opacity: 0.95,
    // backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
};















 







    
  return (

<div style={myStyle}>

<nav class="navbar navbar-expand-lg navbar-dark elegant-color " >

 
  <a class="navbar-brand" href="#"><Link to="/"><img  src={ require('../assets/images/logo.jpeg')} style={{borderRadius:"10px", userSelect: "none"}} alt="image" /></Link></a>

  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
  
    <i class="fa-solid fa-bars" style={{color:"white"}}></i>
  </button>

 
  <div class="collapse navbar-collapse" id="basicExampleNav">

    
    <ul class="navbar-nav mr-auto" >
    <li class="nav-item" style={{fontSize:"17px"}}>
      <Link to='/notices' > <a class="nav-link hover-underline-animation"  href="#"><span style={{color:"white", userSelect: "none"}}>Notices<i class="fa-solid fa-bell" style={{marginLeft:"4px"}}></i></span></a></Link>
      </li>
      <li class="nav-item active" style={{fontSize:"17px"}}>
      <AnchorLink href='#projects'><a class="nav-link hover-underline-animation" href="#" ><span style={{color:"white", userSelect: "none"}}>Featured Projects<i class="fa-solid fa-1x fa-wrench" style={{marginLeft:"4px"}}></i></span>
          <span class="sr-only">(current)</span>
        </a></AnchorLink>
      </li>
    <li style={{fontSize:"17px", }}>
    <a class="nav-link hover-underline-animation" target="blank" href="https://drive.google.com/file/d/1sML0h9K8s9u33vSQpi0LGo_mfQyqLxo_/view?usp=sharing"><span style={{color:"white", userSelect: "none"}}>Newsletter<i class="fa-solid fa-newspaper"style={{marginLeft:"4px"}}></i></span></a>
    </li>
      
      <li class="nav-item active"style={{fontSize:"17px", color:"white"}}>
        <a class="nav-link hover-underline-animation" href="#"><AnchorLink href='#team' style={{color:"white", userSelect: "none"}}>Team<i class="fa-solid fa-users" style={{marginLeft:"4px"}}></i></AnchorLink></a>
      </li>
     
      <li class="nav-item active"style={{fontSize:"17px", color:"white", userSelect: "none"}}>
        <a class="nav-link hover-underline-animation" href="#"  data-backdrop="false" type="button"  data-toggle="modal" data-target="#modalRegular">Location<i class="fa-solid fa-location-dot" style={{marginLeft:"4px"}}></i></a>
      </li>
     
     <li style={{fontSize:"17px",}}>
     <div><a class="nav-link hover-underline-animation " href="mailto:amuroboclub@gmail.com"><span style={{ color:"white", userSelect: "none"}}>Email<i class="fa-solid fa-envelope" style={{marginLeft:"4px"}}></i></span></a></div>
     </li>
<li style={{fontSize:"17px"}}><Link to='/contributors' > <a class="nav-link hover-underline-animation"  href="#"><span style={{color:"white", userSelect: "none", }}>Contributors<i class="fa-solid fa-heart" style={{marginLeft:"4px"}}></i></span></a></Link></li>

     
      {/* <li class="nav-item dropdown" style={{fontSize:"17px",}}>
     <a class="nav-link dropdown-toggle hover-underline-animation" id="navbarDropdownMenuLink" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false" style={{color:"white",  cursor: "pointer", userSelect: "none"}}>More<i class="fa-solid fa-caret-down" style={{marginLeft:"2px"}}></i></a>
        <div class="dropdown-menu dropdown-menu-dark" style={{background:"black"}} aria-labelledby="navbarDropdownMenuLink">
        
         
          <div><AnchorLink href='#benefits'><a class="nav-link hover-underline-animation" href="#" ><span style={{color:"white", fontSize:"17px", userSelect: "none"}}>Benefits<i class="fa-solid fa-handshake" style={{marginLeft:"4px"}}></i></span>
        </a></AnchorLink></div>
      <div> </div> 
        </div>
      </li> */}

    </ul>
  

 
  </div>
 

</nav>


   








  



	{/* <!-- section --> */} 

    <Introduction/>
    

   

    <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce="true" offset={15}  duration="0.5">
    <div className="section margin-top_3" style={{paddingTop:"0px"}}>
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                    <div className="full" style={{paddingTop: "130px"}}>
                        <img src={content[0].aboutImages[1].image} alt="#" style={{height:"460px", borderRadius:"40px", userSelect: "none"}}/>
                    </div>
                </div>
                <div className="col-md-6 layout_padding_2">
                    <div className="full">
                        <div className="heading_main text_align_center">
						   <h2 style={{color:"#E5E4E2"}}>Why Join Us
                          </h2>
                        </div>
						  <p style={{color:"#E5E4E2", textAlign: "justify",fontSize:"15px"}} >{content[0].whyjoin}</p>
						
                    </div>
                </div>
				
            </div>
        </div>
    </div>

    </AnimationOnScroll>
    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true" offset={15}  duration="0.5">
    <div className="heading_main text_align_center" >
						   <h2 style={{color:"#E5E4E2"}}>What Makes Us Different</h2>
                        </div>
    <div className="section margin-top_50">
        <div className="container">
            <div className="row "><p style={{color:"#E5E4E2", textAlign: "justify", marginLeft:"10px", marginRight:"10px", fontSize:"20px",fontFamily:"Lucida Handwriting", fontStyle:"italic"}}>{content[0].whatMakesUsDifferent}...</p>
              </div></div></div></AnimationOnScroll>


<Test/>
   



























  
        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true"  duration="0.7">
<Achievements/></AnimationOnScroll>
<div className="heading_main text_align_center" style={{paddingTop:"135px", paddingBottom:"0px"}}>
						   <h2 style={{color:"#E5E4E2"}}>Featured Projects</h2>
                        </div>
	
   
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true"  duration="0.8">
  <Cards />
</AnimationOnScroll>
  


<Benefits/>


    
             
  <div class="section margin-top_50 silver_bg" id='benefits'>
        <div class="container">
            <div class="row">
			   
                
                       
                   
						</div>
        </div>
    </div>







    

  

<Team/>

<Location/>




<div className="heading_main text_align_center" style={{paddingTop:"70px"}}>
						   <h2 style={{color:"#E5E4E2"}}>Photo Gallery</h2>
                        </div>


                       
                        <ImageSlider/>
                    

    <div style={{marginTop:"70px"}}>
    <Footer /></div>
    
             
    
    </div>
  )
}

export default Home
