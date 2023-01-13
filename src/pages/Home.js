import React, {useRef} from 'react'
import Footer from '../components/Footer';
import './css/bootstrap.min.css';
import './css/pogo-slider.min.css';
import './css/style.css';
import './css/custom.css';
import './css/responsive.css';
import './css/responsiveslides.css';
import './css/custom.css';
import Team from '../components/Team';
import Achievements from '../components/Achievements';
import Benefits from '../components/Benefits';
import Location from '../components/Location';

import SimpleImageSlider from "react-simple-image-slider";
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
    const images = [
        { url: "../assets/images/NBAteam.jpeg", title: "beach" },
        { url: "../assets/images/Alumniday.jpeg", title: "boat" },
        { url: "../assets/images/Team.jpeg", title: "forest" },
        { url: "../assets/images/Alumniday.jpeg", title: "city" },
        { url: "../assets/images/NBAteam.jpeg", title: "italy" },
      ];


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
						   <h2>What is AMURoboclub &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
                        </div>
						  <p>{content[0].about}</p>
						
                    </div>
                </div>
				<div className="col-md-6">
                    <div className="full" style={{paddingTop: "50px"}}>
                        <img style={{height:"375px"}} src={require("../assets/images/Team.jpeg")} alt="#" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    


       {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
   Launch demo modal
</button>

<Modals /> */}


    <div className="section margin-top_50" style={{paddingTop:"0px"}}>
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                    <div className="full" style={{paddingTop: "80px"}}>
                        <img src={require("../assets/images/wallpaper.png")} alt="#" style={{height:"350px"}}/>
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



<Benefits/>

   
    
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




 <form ref={form} onSubmit={sendEmail}>
    <div id='email'>
      <div className="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
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




    



<Team/>

<Location/>





    <div style={{marginTop:"70px"}}>
    <Footer /></div>
             
    </>
  )
}

export default Home
