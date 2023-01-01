import React from 'react'

const PhotoGallery = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide w-50" data-ride="carousel" >
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={require("../assets/images/Alumniday.jpeg")} alt="First slide"/>
      <div className="carousel-caption d-none d-md-block">
    <h5>NNBDJBDBsfb</h5>
    <p>...</p>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={require("../assets/images/NBAteam.jpeg")} alt="Second slide"/>
      <div className="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={require("../assets/images/Team.jpeg")} alt="Third slide"/>
      <div className="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>
  )
}

export default PhotoGallery
