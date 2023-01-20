import React from 'react'

const NoticeModal = (props) => {

 
  return (





 <div>



{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModalLong2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">{props.date}</h5>
        <button type="button" onClick={props.hide} class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      {/* <img src={props.eventName} className="img-fluid" style={{marginBottom:"14px"}} /> */}
      <p style={{fontSize:"12px", textAlign: "justify", fontWeight:"bold"}}>{props.details}</p>
      {/* <p style={{marginLeft:"13px", marginRight:"13px"}}>{props.description}</p> */}
    
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

export default NoticeModal
