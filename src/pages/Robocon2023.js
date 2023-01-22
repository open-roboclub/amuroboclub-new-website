import React from 'react'
import { Link } from 'react-router-dom';
import content from '../assets/cms/content.json'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Location from '../components/Location';
import Footer from '../components/Footer';
import { HashLink } from 'react-router-hash-link';
const Robocon2023 = () => {
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
    <Link to='/' > <a class="nav-link hover-underline-animation"  href="#"><span style={{color:"white", userSelect: "none"}}>Home<i class="fa-solid fa-house" style={{marginLeft:"4px"}}></i></span></a></Link>
    </li>
    <li class="nav-item" style={{fontSize:"17px"}}>
      <Link to='/notices' > <a class="nav-link hover-underline-animation"  href="#"><span style={{color:"white", userSelect: "none"}}>Notices<i class="fa-solid fa-bell" style={{marginLeft:"4px"}}></i></span></a></Link>
      </li>
  <li style={{fontSize:"17px", }}>
  <a class="nav-link hover-underline-animation" target="blank" href="https://drive.google.com/file/d/1sML0h9K8s9u33vSQpi0LGo_mfQyqLxo_/view?usp=sharing"><span style={{color:"white", userSelect: "none"}}>Newsletter<i class="fa-solid fa-newspaper"style={{marginLeft:"4px"}}></i></span></a>
  </li>
    
  <li class="nav-item" style={{fontSize:"17px"}}>
    <HashLink smooth to='/#team' > <a class="nav-link hover-underline-animation"  href="#"><span style={{color:"white", userSelect: "none"}}>Team<i class="fa-solid fa-users" style={{marginLeft:"4px"}}></i></span></a></HashLink>
    </li>
   
    <li class="nav-item active"style={{fontSize:"17px", color:"white", userSelect: "none"}}>
      <a class="nav-link hover-underline-animation" href="#"  data-backdrop="false" type="button"  data-toggle="modal" data-target="#modalRegular">Location<i class="fa-solid fa-location-dot" style={{marginLeft:"4px"}}></i></a>
    </li>
   
   <li style={{fontSize:"17px",}}>
   <div><a class="nav-link hover-underline-animation " href="mailto:amuroboclub@gmail.com"><span style={{ color:"white", userSelect: "none"}}>Email<i class="fa-solid fa-envelope" style={{marginLeft:"4px"}}></i></span></a></div>
   </li>
<li style={{fontSize:"17px"}}><Link to='/contributors' > <a class="nav-link hover-underline-animation"  href="#"><span style={{color:"white", userSelect: "none", }}>Contributors<i class="fa-solid fa-heart" style={{marginLeft:"4px"}}></i></span></a></Link></li>

   
    

  </ul>



</div>


</nav>


            <div className="heading_main text_align_center" style={{paddingTop:"25px"}}>
						   <h1 style={{color:"#E5E4E2", fontWeight:"bold", fontSize:"35px", margin:"0px"}}>DD Robocon 2023</h1>
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


              
<Location/>
              <Footer />               
    </div>
  )
}

export default Robocon2023;
