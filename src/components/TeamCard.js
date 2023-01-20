import React, {useState} from 'react'

import '../assets/ComponentDesign/Team.css';

const TeamCard = ({ item }) => {
  // const [model, setModel]= useState(false);
  // const [tempdata, setTempdata]= useState([]);
  
  //     const getData = (img, name, description, progress, teamMembers, date)=> {
  //         let tempData = [img, name, description, progress, teamMembers, date];
  //         setTempdata(item=> [1, ...tempData])
  //         return setModel(true);
  //     }
  return (
    
     <div class="container">
  <section class="mx-auto my-5">
      
    <div class="card testimonial-card mt-2 mb-3">
      <div class="card-up aqua-gradient"></div>
      <div class="avatar mx-auto white">
        <img src={item.profileImageUrl} class="rounded-circle img-fluid"
          alt="No image to show" style={{height: "120px", width:"120px", borderRadius:"50%"}}/>
      </div>
      <div class="card-body text-center">
        <h4 class="card-title font-weight-bold" style={{color: "rgb(35, 35, 35)", fontSize:"11px"}}>{item.name}</h4>
        <hr/>
        <p style={{fontWeight:"bold"}}>{item.position}</p>
        <div class="media-icons">
             <a href={"mailto:"+item.email} ><i class="fa-solid fa-2x fa-envelope "></i></a>
           </div>
      </div>
    </div>
    
  </section>





 




  
</div>
    
  )
}

export default TeamCard
