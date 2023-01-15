import React from 'react'
import content from '../assets/cms/content.json'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const ImageSlider = () => {
  return (
    <div className="carousel-wrapper text-center" style={{marginLeft:"80px", marginRight:"80px", paddingTop:"0px"}} >
    <Carousel >
        <div>
            <img src={content[0].galleryImages[0].image} />
        </div>
        <div>
            <img src={content[0].galleryImages[1].image} />
        </div>
        <div>
            <img src={content[0].galleryImages[2].image} />
        </div>
        <div>
            <img src={content[0].galleryImages[3].image} />
        </div>
        <div>
            {/* <img src={content[0].galleryImages[4].image} /> */}
        </div>
    </Carousel>
</div>
  )
}

export default ImageSlider
