import React from 'react'
import Footer from '../components/Footer';
import './css/bootstrap.min.css';
import './css/pogo-slider.min.css';
import './css/style.css';
import './css/custom.css';
import './css/responsive.css';
import './css/responsiveslides.css';
import './css/custom.css';
import SimpleImageSlider from "react-simple-image-slider";
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
                  <h1 style={{opacity: "0"}}>Trusted and <br/>Professional Advisers</h1>
                  <div style={{paddingLeft: "500px"}}><button style={{ backgroundColor:"white", height: "45px", width: "85"}}>About us</button></div>
                  <span style={{opacity: "0"}}>for your Business</span>
                  <p style={{opacity: "0"}}>Showcase your Profile to the world using online CV builder and Get Hired Faster</p>
                  
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
					   <li><a href="#"><span class="icon"></span><span>Achievements</span></a></li>
					   <li><a href="#"><span class="icon"></span><span>Benefits</span></a></li>
					   <li><a href="#"><span class="icon"></span><span>Events</span></a></li>
					   <li><a href="#"><span class="icon"></span><span>Newsletter</span></a></li>
					   <li><a href="#"><span class="icon"></span><span>Location</span></a></li>
					   <li><a href="#"><span class="icon"></span><span>Call us</span></a></li>
					   <li><a href="#"><span class="icon"></span><span>Email</span></a></li>
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
                    <div style={{paddingLeft: "120px"}}>
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
                
   


  








   
    
	{/* <!-- end section --
	<!-- section --> */}
    <div className="section layout_padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="full">
                        <div className="heading_main text_align_center">
						   <h2>Projects</h2>
                        </div>
					  </div>
                </div>
				<div className="col-md-4">
                    <div className="full blog_img_popular">
                       {/* <img className="img-responsive" src={require("../assets/images/p1.png")} alt="#" />  */}
					   <h4>Project1</h4>
                    </div>
                </div>
				<div className="col-md-4">
                    <div className="full blog_img_popular">
                        {/* <img className="img-responsive" src="images/p2.png" alt="#" /> */}
						<h4>Project2</h4>
                    </div>
                </div>
				<div className="col-md-4">
                    <div className="full blog_img_popular">
                        {/* <img className="img-responsive" src="images/p3.png" alt="#" /> */}
						<h4>Project3</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
	
   
   


    {/* <PhotoGallery/> */}



    <div style={{paddingTop:"70px"}}>
    <Footer /></div>
             

    
    </>
  )
}

export default Home
