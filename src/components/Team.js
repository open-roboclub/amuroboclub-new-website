import React, {useState,useEffect} from "react";
import Slider from "react-slick";
import '../assets/ComponentDesign/Team.css';
import BasicCard from "./TeamCard";
import { db } from '../firebase';
import { getDoc, doc,getDocs,  collection} from "firebase/firestore"; 
import { BookSharp } from "@mui/icons-material";

const SampleNextArrow=(props) =>{
  const { className, style, onClick } = props;
  return (

    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />

  );
}

const SamplePrevArrow=(props)=> {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />

  );
}



  const Team = () => {

    const [team, setTeam]= useState([]);

const docRef = doc(db, 'teams', 'team_2022-23')

// getDoc(docRef).then((doc)=>{
//   // console.log(doc.data().members)
//   let allData= [];
// doc.data().members.map((item)=>{
//    allData.push(item);
// })
// console.log(allData)

// })



useEffect(()=>{
  const fetchTeam= async ()=>{
    const docSnap= await getDoc(docRef);
    if (docSnap.exists()){
      const allData= {
        ...docSnap.data(),
      }
      console.log(allData)
      setTeam(allData.members);
      console.log(team)
    }
  };
  fetchTeam();
}, []);


  

   function compare(a, b) {
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
  
  
team.sort(compare)

  

  console.log(team)









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
    <div>
      <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            
    </ul>
    
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
        {team?.map((item, index) => {
          return <BasicCard key={index} item={item} />;
        })}
        
      </Slider>
      
    </div>
    </div>
  );
}

export default  Team;