import React from 'react'
import content from "../assets/cms/content.json"
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Introduction = () => {
  return (
    <div>
    <ul class="circles">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    
</ul>
   
    <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true"  duration="0.7">
    <div className="section margin-top_50">
        <div className="container">
            <div className="row">
                <div className="col-md-6 layout_padding_2">
                    <div className="full">
                        <div className="heading_main text_align_center">
						   <h2 style={{color:"#E5E4E2"}}>What is AMURoboclub</h2>
                        </div>
						  <p style={{color:"#E5E4E2", textAlign: "justify"}}>{content[0].about}</p>
						
                    </div>
                </div>
				<div className="col-md-6">
                    <div className="full" style={{paddingTop: "50px"}}>
                        <img style={{height:"375px", borderRadius:"40px"}} src={content[0].aboutImages[0].image} alt="#" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </AnimationOnScroll>
    </div>
  )
}

export default Introduction
