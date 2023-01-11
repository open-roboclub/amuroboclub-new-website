import React from "react";
import Slider from "react-slick";
import '../assets/ComponentDesign/Team.css';
import BasicCard from "./TeamCard";



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />

  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
   
  );
}

export default function Team() {
  const slider = React.useRef(null);

  const settings = {
    infinite: true,
    arrows: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    // customPaging: function (i) {
    //   return <p>{i + 1}</p>;
    // },

    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          
        },
      },

      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="team" id="team">
       <div className="heading_main text_align_center" style={{paddingTop:"100px"}}>
						   <h2>Team</h2>
                        </div>

      <div style={{ marginLeft: 150 }}>
        <button onClick={() => slider?.current?.slickPrev()} type="button" className="btn btn-primary btn-floating btn-dark">
        <i class="fa-solid fa-arrow-left"></i>
        </button>
        <button
          style={{ marginLeft: 1135 }}
          onClick={() => slider?.current?.slickNext()}
          type="button" className="btn btn-primary btn-floating btn-dark">
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <Slider ref={slider} {...settings}>
        {products?.map((item, index) => {
          return <BasicCard item={item} />;
        })}
      </Slider>
    </div>
  );
}

const products = [
  {
    id: 1,
    image: "https://shravanmeena.netlify.app/static/media/gym.c7d7ed62.png",
  },
  {
    id: 2,
    image: "https://shravanmeena.netlify.app/static/media/gym.c7d7ed62.png",
  },
  {
    id: 3,
    image: "https://shravanmeena.netlify.app/static/media/gym.c7d7ed62.png",
  },
  {
    id: 4,
    image: "https://shravanmeena.netlify.app/static/media/gym.c7d7ed62.png",
  },

  {
    id: 5,
    image: "https://shravanmeena.netlify.app/static/media/gym.c7d7ed62.png",
  },
  {
    id: 6,
    image: "https://shravanmeena.netlify.app/static/media/gym.c7d7ed62.png",
  },
];
