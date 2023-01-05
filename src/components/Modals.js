import React from 'react'

const Modals = (props) => {
    let modelStyle ={
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8',
    }

 
  return (
<div className="modal show fade" id="exampleModalLong" style={modelStyle} tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document" style={{overflowY: "initial !important"}}>
    <div className="modal-content " style={{ height: "90vh", overflowY: "auto"}}>
      <div className="modal-header">
        <h1 className="modal-title" style={{fontFamily: "	Copperplate", fontWeight: "bold"}} id="exampleModalLongTitle">{props.name}</h1>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.hide}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <img src={props.img} className="img-fluid" style={{paddingBottom:"14px"}} />
      <p style={{fontSize:"12px"}}>Completion Date: {props.date}</p>
      <div class="progress" style={{height: "40px"}}>
  <div className="progress-bar bg-success" role="progressbar" style={{width: "76%"}} aria-valuenow="76" aria-valuemin="0" aria-valuemax="100">Completion status</div>
</div>
      </div>
       <p style={{marginLeft:"13px", marginRight:"13px"}}>{props.description}</p>
       <h2 style={{fontWeight: "bold", marginLeft:"13px"}}>Team</h2>
     {props.teamMembers.map(function(object){
        return <li style={{listStyleType: "circle", marginLeft: "13px"}}> {object}</li>;
    })}
    </div>
  </div>
</div>




//     <div classNameName="modal show fade" style={modelStyle}>
//   <div classNameNameName="modal-dialog" role="document">
//     <div classNameName="modal-content">
//       <div classNameName="modal-header">
//         <h5 classNameName="modal-title">{props.name}</h5>
//         <button type="button" classNameName="close" onClick={props.hide}>
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div classNameName="modal-body">
//         <img src={props.img} classNameName="img-fluid" />
//         <p>{props.description}</p>
//       </div>
     
//     </div>
//   </div>
// </div>
  )
}

export default Modals
