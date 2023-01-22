import React from 'react'
import '../assets/ComponentDesign/Modal.css';
const Modals = (props) => {

 
  return (





 <div>



{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog"  role="document">
    <div class="modal-content darkBG"  >
      <div class="modal-header " >
        <h5 class="modal-title" id="exampleModalLongTitle" style={{color:"white"}}>{props.name}</h5>
        <button type="button" onClick={props.hide} class="close" style={{color:"white"}} data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <img src={props.img} className="img-fluid" style={{marginBottom:"14px", borderRadius:"20px"}} />
      <p style={{fontSize:"12px", color:"white"}}>Completion Date: {props.date}</p>
      <p style={{marginLeft:"13px", marginRight:"13px", color:"white", textAlign: "justify"}}>{props.description}</p>
      {
     props.teamMembers? <h2 style={{fontWeight: "bold", marginLeft:"13px", color:"white"}}>Team</h2>:''
    }
        {props.teamMembers?.map((object)=>{
         return <li style={{listStyleType: "circle", marginLeft: "13px", color:"white"}}> {object.member}</li>;
    })}
      </div>
      <div class="modal-footer">
       
        <button class="btn8 success" onClick={props.hide}>Close</button>
      </div>
    </div>
  </div>
</div>



































</div>

  )
}

export default Modals
