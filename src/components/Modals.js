import React from 'react'

const Modals = (props) => {
 var x= parseInt(props.progress)
const progress ={
  width: x,
}
 
  return (



   
    
















 <div>

<div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog"   ariaLabelledby="exampleModalLongTitle" ariaHidden="true"  >
  <div className="modal-dialog modal-dialog-scrollable" role="document"   >
    <div className="modal-content" >
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle"  >{props.name}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.hide} >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body" style={{height: "500px", overflowY: "auto"}}>
      <img src={props.img} className="img-fluid" style={{paddingBottom:"14px"}} />
     <p style={{fontSize:"12px"}}>Completion Date: {props.date}</p>
     <div className="progress" style={{height: "40px"}}>
  <div className="progress-bar bg-success" role="progressbar"  aria-valuenow={props.progress} aria-valuemin="0" aria-valuemax="100">Completion status</div>
</div>
     <p style={{marginLeft:"13px", marginRight:"13px"}}>{props.description}</p>
     {
     props.teamMembers? <h2 style={{fontWeight: "bold", marginLeft:"13px"}}>Team</h2>:''
    }
        {props.teamMembers?.map((object)=>{
         return <li style={{listStyleType: "circle", marginLeft: "13px"}}> {object.member}</li>;
    })}
      <div className="modal-footer">
     <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.hide}>Close</button>
     
     </div>
      </div>
      

  
     
   </div>
   </div>
 </div>



</div>

  )
}

export default Modals
