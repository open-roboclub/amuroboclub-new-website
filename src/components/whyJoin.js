import React from 'react'
import content from "../assets/cms/content.json"
const whyJoin = () => {
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
    
    <div className="section margin-top_50" style={{paddingTop:"0px"}}>
    <div className="container">
        <div className="row">
        <div className="col-md-6">
                <div className="full" style={{paddingTop: "80px"}}>
                    <img src={content[0].aboutImages[1].image} alt="#" style={{height:"350px", borderRadius:"40px"}}/>
                </div>
            </div>
            <div className="col-md-6 layout_padding_2">
                <div className="full">
                    <div className="heading_main text_align_center">
                       <h2 style={{color:"#E5E4E2"}}>Why Join US
                      </h2>
                    </div>
                      <p style={{color:"#E5E4E2", textAlign: "justify"}} >{content[0].whyjoin}</p>
                    
                </div>
            </div>
            
        </div>
    </div>
    </div>
</div>
  )
}

export default whyJoin
