import React, {useRef} from 'react'
import Particles, { ISourceOptions } from "react-tsparticles";
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import './css/bootstrap.min.css';
import './css/pogo-slider.min.css';
import './css/style.css';
import './css/custom.css';
import './css/responsive.css';
import './css/responsiveslides.css';
import './css/custom.css';

import Benefits from '../components/Benefits';
import Team from '../components/Team';
import Achievements from '../components/Achievements';

import Location from '../components/Location';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Modals from '../components/Modals';
import Cards from '../components/Cards';
import emailjs from '@emailjs/browser';
import AnchorLink from "react-anchor-link-smooth-scroll";
// import PhotoGallery from '../components/PhotoGallery'


// import { grey, pink } from '@material-ui/core/colors';

// import { grey, pink, red } from '@material-ui/core/colors';
import content from "../assets/cms/content.json"
// import PhotoGallery from '../components/PhotoGallery';
console.log(process.env.REACT_APP_apiKey);
const Home = () => {
    


      const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_oa8v4dk', 'template_rafm2to', form.current, 'LpfTSt9YjR7oLm7Am')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
        };
   
  return (
    <>


<section className="banner_main">
      <div className="container">
         <div className="row">
            <div className="col-md-7 col-lg-7">
               <div className="text-bg">
                  <h1 style={{opacity: "0"}}>Trusted and <br/><br/>Professional Advisers</h1>
                  
                  
                  
                  
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
                       <AnchorLink href='#team'> <li><a href="#"><span>Team</span></a></li></AnchorLink>
					   <li><a  type="button"  data-toggle="modal" data-target="#modalRegular"><span style={{color: "black"}}> Location</span></a></li>
					   <li><a href="#" data-toggle="modal" data-target="#modalContactForm"><span class="icon"></span><span>Email</span></a></li>
					   <li><a href="https://drive.google.com/file/d/1sML0h9K8s9u33vSQpi0LGo_mfQyqLxo_/view?usp=sharing"><span class="icon"></span><span>Newsletter</span></a></li>
                       
                       
                       
                       


                       
					</ul>
				 </div>
			  </div>
		  </div>
	   </div>
	</div>
  



	{/* <!-- section --> */} 
  <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true"  duration="0.7">
    <div className="section margin-top_50">
        <div className="container">
            <div className="row">
                <div className="col-md-6 layout_padding_2">
                    <div className="full">
                        <div className="heading_main text_align_left">
						   <h2>What is AMURoboclub &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
                        </div>
						  <p>{content[0].about}</p>
						
                    </div>
                </div>
				<div className="col-md-6">
                    <div className="full" style={{paddingTop: "50px"}}>
                        <img style={{height:"375px"}} src={content[0].aboutImages[0].image} alt="#" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </AnimationOnScroll>

   

    <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce="true" offset={15}  duration="0.5">
    <div className="section margin-top_50" style={{paddingTop:"0px"}}>
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                    <div className="full" style={{paddingTop: "80px"}}>
                        <img src={content[0].aboutImages[1].image} alt="#" style={{height:"350px"}}/>
                    </div>
                </div>
                <div className="col-md-6 layout_padding_2">
                    <div className="full">
                        <div className="heading_main text_align_right">
						   <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Why Join Us&nbsp;
                           &nbsp;&nbsp;&nbsp;&nbsp;
                           &nbsp;&nbsp; </h2>
                        </div>
						  <p>{content[0].whyjoin}</p>
						
                    </div>
                </div>
				
            </div>
        </div>
    </div>

    </AnimationOnScroll>





   



























  
        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true"  duration="0.7">
<Achievements/></AnimationOnScroll>
<div className="heading_main text_align_center" style={{paddingTop:"135px", paddingBottom:"0px"}}>
						   <h2>Featured Projects</h2>
                        </div>
	
   
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true"  duration="0.8">
  <Cards/>
</AnimationOnScroll>
  

<AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true"  duration="0.7">
<Benefits/>

</AnimationOnScroll>
    
             
  <div class="section margin-top_50 silver_bg" id='benefits'>
        <div class="container">
            <div class="row">
			   
                
                       
                   
						</div>
        </div>
    </div>




 <form ref={form} onSubmit={sendEmail}>
    <div id='email'>
      <div className="modal fade" id="modalContactForm" tabindex="-1" role="dialog" ariaLabelledby="myModalLabel"
  aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header text-center">
        <h4 className="modal-title w-100 font-weight-bold" style={{color: "black"}}>Write to us</h4>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body mx-3">
        <div className="md-form mb-5">
          <i className="fas fa-user prefix grey-text"></i><label data-error="wrong" data-success="right" for="form34">&nbsp;&nbsp;&nbsp;Your name</label>
          <input type="text" id="form34" className="form-control validate" name='name'/>
          
        </div>

        <div className="md-form mb-5">
          <i className="fas fa-envelope prefix grey-text"></i><label data-error="wrong" data-success="right" for="form29">&nbsp;&nbsp;&nbsp;Your email</label>
          <input type="email" id="form29" className="form-control validate" name='email'/>
          
        </div>

        <div className="md-form mb-5">
          <i className="fas fa-tag prefix grey-text"></i><label data-error="wrong" data-success="right" for="form32">&nbsp;&nbsp;&nbsp;Subject</label>
          <input type="text" id="form32" className="form-control validate" name='subject'/>
          
        </div>

        <div className="md-form">
          <i className="fas fa-pencil prefix grey-text"></i><label data-error="wrong" data-success="right" for="form8">&nbsp;&nbsp;&nbsp;Your message</label>
          <textarea type="text" id="form8" name='message' className="md-textarea form-control" rows="4"></textarea>
          
        </div>

      </div>
      <div className="modal-footer d-flex justify-content-center">
        <button className="btn btn-unique">Send <i className="fas fa-paper-plane-o ml-1"></i></button>
      </div>
    </div>
  </div>
</div>


    </div>
    </form>




    

    <AnimationOnScroll animateIn="animate__bounceIn" animateOnce="true"  duration="1">

<Team/>
</AnimationOnScroll>
<Location/>




<div className="heading_main text_align_center" style={{paddingTop:"70px"}}>
						   <h2>Photo Gallery</h2>
                        </div>


                       
                        <ImageSlider/>
                    

    <div style={{marginTop:"70px"}}>
    <Footer /></div>
    
             
    </>
  )
}

export default Home
