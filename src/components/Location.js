import React from 'react'
import '../assets/ComponentDesign/Location.css';
const Location = () => {
  return (
    <div>
    <div className="text-center">

 
 

</div>

{/* <!--Modal: Name--> */}
<div className="modal fade" id="modalRegular" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">

    {/* <!--Content--> */}
    <div className="modal-content">

      {/* <!--Body--> */}
      <div className="modal-body mb-0 p-0">

        {/* <!--Google map--> */}
        <div id="map-container-google-16" className="z-depth-1-half map-container-9" style={{height: "400px"}}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.6005178518208!2d78.07286532567514!3d27.91422992739387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a4e35a75d759%3A0x136bbf8ba816384c!2sAMU%20Roboclub!5e0!3m2!1sen!2sin!4v1673114482125!5m2!1sen!2sin"
            frameborder="0" style={{border:"0"}} allowfullscreen></iframe>
        </div>

      </div>

      {/* <!--Footer--> */}
      <div className="modal-footer justify-content-center">

        {/* <button type="button" className="btn btn-info btn-md">Save location <i className="fas fa-map-marker-alt ml-1"></i></button> */}
        <button type="button" className="btn btn-dark" data-dismiss="modal">Close</button>

      </div>

    </div>
    {/* <!--/.Content--> */}

  </div>
</div>
</div>
  )
}

export default Location
