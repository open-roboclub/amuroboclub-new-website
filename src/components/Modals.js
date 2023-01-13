import React from 'react'

const Modals = (props) => {
    let modelStyle ={
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8',
    }

 
  return (



<div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">{props.name}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <img src={props.img} classNameNameName="img-fluid" style={{paddingBottom:"14px"}} />
     <p style={{fontSize:"12px"}}>Completion Date: {props.date}</p>
      </div>
      <div classNameName="progress" style={{height: "40px"}}>
  <div classNameNameName="progress-bar bg-success" role="progressbar" style={{width: "76%"}} aria-valuenow="76" aria-valuemin="0" aria-valuemax="100">Completion status</div>
</div>
<p style={{marginLeft:"13px", marginRight:"13px"}}>{props.description}</p>
      <h2 style={{fontWeight: "bold", marginLeft:"13px"}}>Team</h2>
  {props.teamMembers.map(function(object){
         return <li style={{listStyleType: "circle", marginLeft: "13px"}}> {object}</li>;
    })}
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.hide}>Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

//  <div classNameNameName="modal show fade" id="exampleModalLong" style={modelStyle} tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
//   <div classNameNameName="modal-dialog modal-lg" role="document" style={{overflowY: "initial !important"}}>
//     <div classNameNameName="modal-content " style={{ height: "90vh", overflowY: "auto"}}>
//       <div classNameNameName="modal-header">
//         <h1 classNameNameName="modal-title" style={{fontFamily: "	Copperplate", fontWeight: "bold"}} id="exampleModalLongTitle">{props.name}</h1>
//         <button type="button" classNameNameName="close" data-dismiss="modal" aria-label="Close" onClick={props.hide}>
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div classNameNameName="modal-body">
//       <img src={props.img} classNameNameName="img-fluid" style={{paddingBottom:"14px"}} />
//       <p style={{fontSize:"12px"}}>Completion Date: {props.date}</p>
//       <div classNameName="progress" style={{height: "40px"}}>
//   <div classNameNameName="progress-bar bg-success" role="progressbar" style={{width: "76%"}} aria-valuenow="76" aria-valuemin="0" aria-valuemax="100">Completion status</div>
// </div>
//       </div>
//        <p style={{marginLeft:"13px", marginRight:"13px"}}>{props.description}</p>
//        <h2 style={{fontWeight: "bold", marginLeft:"13px"}}>Team</h2>
//      {props.teamMembers.map(function(object){
//         return <li style={{listStyleType: "circle", marginLeft: "13px"}}> {object}</li>;
//     })}
//     </div>
//   </div>
// </div> 





  )
}

export default Modals
