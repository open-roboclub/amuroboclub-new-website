import React from 'react'
import Footer from '../components/Footer';
import './css/bootstrap.min.css';
import './css/pogo-slider.min.css';
import './css/style.css';
import './css/style.css';
import './css/responsive.css';
import './css/custom.css';
import { grey, pink } from '@material-ui/core/colors';

const Home = () => {
  return (
    <>
    
    <div className="ulockd-home-slider">
        <div className="container-fluid">
            {/* <div className="row"> */}
                <div className="pogoSlider" id="js-main-slider">
                <img src={ require('./images/banner_img.png')} alt="" height={600} width={1500}/>
                <div></div>
                <div className="section tabbar_menu">
	   <div className="container">
	      <div className="row" >
		      <div className="col-md-12" >
			     <div className="tab_menu">
				    <ul>
					   <li><a href="#"><span className="icon" ></span><span><i class="fa-regular fa-trophy-star"><button></button></i></span></a></li>
					   <li><a href="#"><span className="icon"></span><span>Graduation</span></a></li>
					   <li><a href="#"><span className="icon"></span><span>Athletics</span></a></li>
					   <li><a href="#"><span className="icon"></span><span>Social</span></a></li>
					   <li><a href="#"><span className="icon"></span><span>Location</span></a></li>
					   <li><a href="#"><span className="icon"></span><span>Call us</span></a></li>
					   <li><a href="#"><span className="icon"></span><span>Email</span></a></li>
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
						<div className="full">
						  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
						</div>
						<div className="full">
						   <a className="hvr-radial-out button-theme" href="#">About more</a>
						</div>
                    </div>
                </div>
				<div className="col-md-6">
                    <div className="full">
                        <img src="images/img2.png" alt="#" />
                    </div>
                </div>
            </div>
        </div>
    </div>
	{/* <!-- end section -->
	<!-- section --> */}
    <div className="section layout_padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="full">
                        <div className="heading_main text_align_center">
						   <h2><span>Popular </span>Courses</h2>
                        </div>
					  </div>
                </div>
				<div className="col-md-4">
                    <div className="full blog_img_popular">
                       <img className="img-responsive" src="images/p1.png" alt="#" /> 
					   <h4>Financial Accounting</h4>
                    </div>
                </div>
				<div className="col-md-4">
                    <div className="full blog_img_popular">
                        <img className="img-responsive" src="images/p2.png" alt="#" />
						<h4>Managerial Accounting</h4>
                    </div>
                </div>
				<div className="col-md-4">
                    <div className="full blog_img_popular">
                        <img className="img-responsive" src="images/p3.png" alt="#" />
						<h4>Intermediate Accounting</h4>
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
                        <img src="images/img6.png" alt="#" />
                    </div>
                </div>
                <div className="col-md-6 layout_padding_2">
                    <div className="full">
                        <div className="heading_main text_align_left">
						   <h2><span>Apply for Admission</span></h2>
                        </div>
						<div className="full">
						  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
						  in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
						  sunt in culpa qui officia deserunt mollit anim id est laborum</p>
						</div>
						<div className="full">
						   <a className="hvr-radial-out button-theme" href="#">Apply</a>
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
						   <h2><span>Reaserch</span></h2>
                        </div>
						<div className="full">
						  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
						  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
						</div>
						<div className="full">
						   <a className="hvr-radial-out button-theme" href="#">See More</a>
						</div>
                    </div>
                </div>
				<div className="col-md-6">
                    <div className="full">
                        <img className="img-responsive" src="images/img7.png" alt="#" />
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
                <div className="col-md-12">
                    <div className="full">
                        <div className="heading_main text_align_center">
						   <h2><span>News</span></h2>
                        </div>
					  </div>
                </div>
			  </div>
               <div className="row">
                <div className="col-lg-12">
                    <div id="demo" className="carousel slide" data-ride="carousel">

                        {/* <!-- The slideshow --> */}
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
									   <div className="full blog_img_popular">
                                          <img className="img-responsive" src="images/img9.png" alt="#" />
										  <h4>Technology</h4>
										  <p>Pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
										</div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="full blog_img_popular">
                                          <img className="img-responsive" src="images/img8.png" alt="#" />
										  <h4>Education</h4>
										  <p>Pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
										</div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
									   <div className="full blog_img_popular">
                                          <img className="img-responsive" src="images/img9.png" alt="#" />
										  <h4>Technology</h4>
										  <p>Pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
										</div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="full blog_img_popular">
                                          <img className="img-responsive" src="images/img8.png" alt="#" />
										  <h4>Education</h4>
										  <p>Pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
										</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Left and right controls --> */}
                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>

                    </div>
                </div>

            </div>			  
           </div>
        </div>
    <Footer />
    </>
  )
}

export default Home
