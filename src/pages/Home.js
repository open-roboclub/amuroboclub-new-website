import React from 'react'
import Footer from '../components/Footer';
import './css/bootstrap.min.css';
import './css/pogo-slider.min.css';
import './css/style.css';
import './css/custom.css';
import './css/responsive.css';
import './css/responsiveslides.css';
import './css/custom.css';
import Achievements from '../components/Achievements';
import Benefits from '../components/Benefits';
import Location from '../components/Location';

import SimpleImageSlider from "react-simple-image-slider";
import Modals from '../components/Modals';
import Cards from '../components/Cards';

import AnchorLink from "react-anchor-link-smooth-scroll";
// import PhotoGallery from '../components/PhotoGallery'
import Carousel from 'react-bootstrap/Carousel';

// import { grey, pink } from '@material-ui/core/colors';

// import { grey, pink, red } from '@material-ui/core/colors';
import content from "../assets/cms/content.json"
// import PhotoGallery from '../components/PhotoGallery';

const Home = () => {
    const images = [
        { url: "../assets/images/NBAteam.jpeg", title: "beach" },
        { url: "../assets/images/Alumniday.jpeg", title: "boat" },
        { url: "../assets/images/Team.jpeg", title: "forest" },
        { url: "../assets/images/Alumniday.jpeg", title: "city" },
        { url: "../assets/images/NBAteam.jpeg", title: "italy" },
      ];
   
  return (
    <>


<section className="banner_main">
      <div className="container">
         <div className="row">
            <div className="col-md-7 col-lg-7">
               <div className="text-bg">
                  <h1 style={{opacity: "0"}}>Trusted and <br/><br/><br/>Professional Advisers</h1>
                  
                  
                  
                  
               </div>
            </div>
            <div className="col-md-5 col-lg-5">
               <div className="ban_img">
                  <figure style={{opacity: "0"}}><img src="images/ba_ing.png" alt="#" /></figure>
               </div>
            </div>
         </div>
      </div>
   </section>



   <div class="section tabbar_menu">
	   <div class="container">
	      <div class="row">
		      <div class="col-md-12">
			     <div class="tab_menu">
				    <ul>
					  <AnchorLink href='#achievements'> <li><a href="#"><span class="icon"></span><span style={{marginLeft:"8px"}}>Achievements</span></a></li></AnchorLink>
                       <AnchorLink href='#benefits'> <li><a href="#"><span class="icon"></span><span style={{marginLeft:"24px"}}>Benefits</span></a></li></AnchorLink>
					   <li><a href="#"><span class="icon"></span><span style={{marginLeft:"16px"}}>Events</span></a></li>
					   <li><a href="#"><span>Team</span></a></li>
					   <li><a  type="button"  data-toggle="modal" data-target="#modalRegular"><span style={{color: "black"}}> Location</span></a></li>
					   <li><a href="#"><span class="icon"></span><span>Email</span></a></li>
					   <li><a href="#"><span class="icon"></span><span>Newsletter</span></a></li>
                       
                       
                       
                    
                       
					</ul>
				 </div>
			  </div>
		  </div>
	   </div>
	</div>



	{/* <!-- section --> */} 
    <div className="section margin-top_50">
        <div className="container">
            <div className="row">
                <div className="col-md-6 layout_padding_2">
                    <div className="full">
                        <div className="heading_main text_align_left">
						   <h2>Welcome to AMURoboclub</h2>
                        </div>
						  <p>{content[0].about}</p>
						<div className="full">
						   <a className="hvr-radial-out button-theme" href="#">About more</a>
						</div>
                    </div>
                </div>
				<div className="col-md-6">
                    <div className="full" style={{paddingTop: "50px"}}>
                        <img src={require("../assets/images/Team.jpeg")} alt="#" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="heading_main text_align_center" style={{paddingTop:"70px"}}>
						   <h2>Photo Gallery</h2>
                        </div>




                        <div class="section layout_padding padding_bottom-0">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <div class="full">
                    <div style={{paddingLeft: "110px"}}>
      <SimpleImageSlider
        width={900}
        height={600}
        images={images}
        showBullets={true}
        showNavs={true}
        navSize={80}
        slideDuration={0.7}
        autoPlay={true}
        autoPlayDelay={2}
      />
    </div>
					  </div>
                </div>
			  </div></div></div>
                
   


  

<Achievements/>





   
    
              <div className="heading_main text_align_center" style={{paddingTop:"135px", paddingBottom:"0px"}}>
						   <h2>Featured Projects</h2>
                        </div>
	
   
   
  <Cards/>

  
  <div class="section margin-top_50 silver_bg" id='benefits'>
        <div class="container">
            <div class="row">
			   
                
                       
                   
						</div>
        </div>
    </div>







<Benefits/>


<Location/>





    <div style={{marginTop:"70px"}}>
    <Footer /></div>
             
    </>
  )
}

export default Home
