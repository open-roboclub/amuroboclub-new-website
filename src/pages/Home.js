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
import { grey, pink } from '@material-ui/core/colors';
import content from "../assets/cms/content.json"

const Home = () => {
    const images = [
        { url: "http://localhost:3000/assets/images/NBAteam.jpeg", title: "beach" },
        { url: "http://localhost:3000/assets/images/Alumniday.jpeg", title: "boat" },
        { url: "http://localhost:3000/assets/images/Team.jpeg", title: "forest" },
        { url: "http://localhost:3000/assets/imagesimage-4.jpg", title: "city" },
        { url: "http://localhost:3000/assets/images/image-5.jpg", title: "italy" },
      ];
   
  return (
    <>
    
    <div className="ulockd-home-slider">
        <div className="container-fluid">
            {/* <div className="row"> */}
                <div className="pogoSlider" id="js-main-slider">
                <img src={ require('../assets/images/banner_img.png')} alt="" height={600} width={1500} />
                <div className="section tabbar_menu">
	   <div className="container">
	      <div className="row" >
		      <div className="col-md-12" >
			     <div className="tab_menu">
				    <ul>
					   <li><a href="#"><span className="icon" ></span><span>Achievements</span></a></li>
					   <li><a href="#"><span className="icon"></span><span>Events</span></a></li>
					   <li><a href="#"><span className="icon"></span><span>Projects</span></a></li>
             <li><a href="#"><span className="icon"></span><span>Newsletter</span></a></li>
					   <li><a href="#"><span className="icon"></span><span>Visit us</span></a></li>
					   <li><a href="#"><span className="icon"></span><span>Contact us</span></a></li>
             <li><a href="#"><span className="icon"></span><span>Contribute</span></a></li>
					</ul>
				 </div>
			  </div>
		  </div>
	   </div>
	</div>
                </div>
            {/* </div> */}
        </div>
    </div>

	{/* <!-- end section -->
	<!-- section --> */}
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
                    <div className="full">
                        <img src={require("../assets/images/Team.jpeg")} alt="#" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    <div style={{paddingLeft: "170px"}}>
      <SimpleImageSlider
        width={1200}
        height={900}
        images={images}
        showBullets={true}
        showNavs={true}
        navSize={80}
        slideDuration={0.7}
        autoPlay={true}
        autoPlayDelay={2}
      />
    </div>
    
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
	{/* <!-- end section -->
	<!-- section --> */}
    <div className="section margin-top_50 silver_bg">
        <div className="container">
            <div className="row">
			    <div className="col-md-6">
                    <div className="full float-right_img">
                        {/* <img src="images/img6.png" alt="#" /> */}
                    </div>
                </div>
                <div className="col-md-6 layout_padding_2">
                    <div className="full">
                        <div className="heading_main text_align_left">
						   {/* <h2><span>Apply for Admission</span></h2> */}
                        </div>
						{/* <div className="full">
						  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
						  in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
						  sunt in culpa qui officia deserunt mollit anim id est laborum</p>
						</div> */}
						<div className="full">
						   {/* <a className="hvr-radial-out button-theme" href="#">Apply</a> */}
						</div>
                    </div>
                </div>
			</div>
        </div>
    </div>
	{/* <!-- end section -->
	<!-- section --> */}
    <div className="section layout_padding padding_bottom-0">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="full">
                        <div className="heading_main text_align_left">
						   {/* <h2><span>Reaserch</span></h2> */}
                        </div>
						{/* <div className="full">
						  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
						  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
						</div> */}
						<div className="full">
						   {/* <a className="hvr-radial-out button-theme" href="#">See More</a> */}
						</div>
                    </div>
                </div>
				<div className="col-md-6">
                    <div className="full">
                        {/* <img className="img-responsive" src="images/img7.png" alt="#" /> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
	{/* <!-- end section -->
	<!-- section --> */}
   
   






    <div style={{paddingTop:"70px"}}>
    <Footer /></div>
             

    
    </>
  )
}

export default Home
