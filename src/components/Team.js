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




  
   const [blogs, setBlogs]= useState([]);

 
    const docRef = doc(db, "teams", "team_2022-23");
   getDoc(docRef)
   .then((doc)=>{
    setBlogs(doc.data().members)
   
   })
  //  console.log(blogs)
  
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
  
  blogs.sort(compare);
   
// console.log(blogs)


  // useEffect(() => {
  //   fetchBlogs();
  //   }, [])
  












  const slider = React.useRef(null);

  const settings = {
    infinite: true,
    arrows: false,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 2,
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
       <div className="heading_main text_align_center" style={{paddingTop:"20px", marginBottom: -10}}>
						   <h2 style={{color:"#E5E4E2"}}>Our Team</h2>
                        </div>

                        <div class="container text_align_center"> 
        <button onClick={() => slider?.current?.slickPrev()} type="button" style={{marginRight:"15px", borderRadius: "50%"}} className="btn btn-primary btn-floating btn-dark">
        <i class="fa-solid fa-2x fa-arrow-left"></i>
        </button>
        <button
         style={{marginLeft:"15px", borderRadius: "50%"}}
          onClick={() => slider?.current?.slickNext()}
          type="button" className="btn btn-primary btn-floating btn-dark">
          <i class="fa-solid fa-2x fa-arrow-right"></i>
        </button>
      </div>

      <Slider  ref={slider} {...settings}>
        {blogs?.map((item, index) => {
          return <BasicCard key={index} item={item} />;
        })}
      </Slider>
      
    </div>
  );
}

