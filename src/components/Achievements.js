import React from 'react'

const Achievements = () => {
  return (
    <div id='achievements'>
    <div id="service" class="service">
      <div class="container">
         <div class="row">
           
            <div className="heading_main text_align_center" style={{paddingTop:"100px"}}>
						   <h2>Achievements</h2>
                        </div>
         </div>
         <div class="row">
            <div class="col-md-4 col-sm-6">
               <div id="ho_color" class="service_box">
                  <img src={require("../assets/images/robocon.png")} alt="#" height={85} width={125} />
                  <h3>Robocon 2020</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and1500s, </p>
               </div>
            </div>
            <div class="col-md-4 col-sm-6">
               <div id="ho_color" class="service_box">
                  <img src={require("../assets/images/robocon.png")} alt="#" height={85} width={125} />
                  <h3>Robocon 2019</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and1500s, </p>
               </div>
            </div>
            <div class="col-md-4 col-sm-6">
               <div id="ho_color" class="service_box">
                  <img src={require("../assets/images/robocon.png")} alt="#" height={85} width={125} />
                  <h3>Robocon 2018</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and1500s, </p>
               </div>
            </div>
            
           
         </div>
      </div>
   </div>
   </div>

  )
}

export default Achievements
