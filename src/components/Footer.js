import React from 'react'
import './Footerstyles.css';

const Footer = () => {
  return (
    <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        {/* <h3>Services</h3> */}
                        <ul>
                            {/* <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li> */}
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        {/* <h3>About</h3> */}
                        <ul>
                            {/* <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li> */}
                        </ul>
                    </div>
                    <div className="heading_main text_align_center" >
                    <h3 style={{color: "white", fontSize: "20px"}}><i class="fa-regular fa-copyright"></i> AMURoboclub 2022-23</h3>
                        </div>
                       
                    
                    <div className="col item social"><a href="https://www.facebook.com/groups/amuroboclub" title='Our facebook' target="_blank"><i className="icon ion-social-facebook"></i></a><a href="https://www.linkedin.com/company/amuroboclub" title='Our LinkedIn' target="_blank"><i className="icon ion-social-linkedin"></i></a><a href="https://www.youtube.com/@amuroboclub" title='Our Youtube' target="_blank"><i className="icon ion-social-youtube"></i></a><a href="https://www.instagram.com/amuroboclub/" title='Our instagram' target="_blank"><i className="icon ion-social-instagram"></i></a></div>
                </div>
                <p className="copyright" style={{color:"white", fontSize:"15px"}}>Developed by: Imad Bin Asad<a target="blank" href="https://github.com/imad10902" title="Imad's github"><i className="icon ion-social-github" style={{color: "white", size:"30px", marginLeft:"5px"}}></i></a></p>
            </div>
        </footer>
    </div>
  )
}

export default Footer
