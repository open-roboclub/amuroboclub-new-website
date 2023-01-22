import React from 'react'
import '../assets/ComponentDesign/Test.css';
import content from '../assets/cms/content.json'
const Test = () => {
  return (
    <>
    <div className="heading_main text_align_center" style={{paddingTop:"70px"}}>
						   <h2 style={{color:"#E5E4E2"}}>Photo Gallery</h2>
                        </div>
  <div className='row justify-content-center align-item-center' style={{marginTop:"0px"}}>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src={content[0].galleryImages[0].image} alt="First slide"/>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src={content[0].galleryImages[1].image} alt="Second slide"/>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src={content[0].galleryImages[2].image} alt="Third slide"/>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src={content[0].galleryImages[3].image} alt="Fourth slide"/>
      </div>
    </div>
    
   
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>  
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div></div>
  </>
  )
}

export default Test
