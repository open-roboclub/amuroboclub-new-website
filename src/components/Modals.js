import React from 'react'

const Modals = (props) => {

 
  return (





 <div>



{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">{props.name}/</h5>
        <button type="button" onClick={props.hide} class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <img src={props.img} className="img-fluid" style={{marginBottom:"14px"}} />
      <p style={{fontSize:"12px"}}>Completion Date: {props.date}</p>
      <p style={{marginLeft:"13px", marginRight:"13px"}}>{props.description}</p>
      {
     props.teamMembers? <h2 style={{fontWeight: "bold", marginLeft:"13px"}}>Team</h2>:''
    }
        {props.teamMembers?.map((object)=>{
         return <li style={{listStyleType: "circle", marginLeft: "13px"}}> {object.member}</li>;
    })}
      </div>
      <div class="modal-footer">
        <button type="button" onClick={props.hide} class="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>



































</div>

  )
}

export default Modals
