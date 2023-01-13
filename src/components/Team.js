import React, {useState,useEffect} from "react";
import Slider from "react-slick";
import '../assets/ComponentDesign/Team.css';
import BasicCard from "./TeamCard";
import { db } from '../firebase';
import { getDoc, doc,  collection} from "firebase/firestore"; 

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




  
   const [blogs, setBlogs]= useState({});

 
    const docRef = doc(db, "teams", "team_2022-23");
   getDoc(docRef)
   .then((doc)=>{
    setBlogs(doc.data());
   })
   console.log(blogs)

   function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const rankA = a.rank;
    const rankB = b.rank;
  
    let comparison = 0;
    if (rankA > rankB) {
      comparison = 1;
    } else if (rankA < rankB) {
      comparison = -1;
    }
    return comparison;
  }
  
  // blogs.sort(compare);
   
console.log(blogs)


  // useEffect(() => {
  //   fetchBlogs();
  //   }, [])
  












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
       <div className="heading_main text_align_center" style={{paddingTop:"100px", marginBottom: -70}}>
						   <h2>Team</h2>
                        </div>

      <div style={{ marginLeft: 150 , marginBottom: -20, position:"relative"}}>
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

      <Slider style={{marginTop: -20, position:"relative"}} ref={slider} {...settings}>
        {blogs.members?.map((item, index) => {
          return <BasicCard key={index} item={item} />;
        })}
      </Slider>
    </div>
  );
}

