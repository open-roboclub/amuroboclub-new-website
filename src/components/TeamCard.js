import React from 'react'

import '../assets/ComponentDesign/Team.css';

const TeamCard = ({ item }) => {
  return (
    
     <div class="container">
  <section class="mx-auto my-5" style={{maxWidth: "27rem"}}>
      
    <div class="card testimonial-card mt-2 mb-3">
      <div class="card-up aqua-gradient"></div>
      <div class="avatar mx-auto white">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg" class="rounded-circle img-fluid"
          alt="woman avatar"/>
      </div>
      <div class="card-body text-center">
        <h4 class="card-title font-weight-bold">Martha Smith</h4>
        <hr/>
        <p><i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
          adipisci</p>
      </div>
    </div>
    
  </section>
</div>
    
  )
}

export default TeamCard
