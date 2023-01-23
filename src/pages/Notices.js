import React, {useState, useEffect} from 'react';
import { getDocs, collection} from "firebase/firestore"; 
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import '../assets/ComponentDesign/notice.css';
import Footer from '../components/Footer';
import NoticeModal from '../components/NoticeModal';
import Loading from '../components/LoadingStyle';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { HashLink } from 'react-router-hash-link';
import Location from '../components/Location';
import AnchorLink from "react-anchor-link-smooth-scroll";
const Notices = () => {

  const [isLoading, setIsLoading] = useState(true);
  const myStyle={
    backgroundImage: 
"url('https://res.cloudinary.com/amuroboclub/image/upload/v1673816613/2022-23_website_react/About/background2.jpg')",
opacity: 0.95,
    // backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
};





    const [notices,setNotices]=useState([])
    const fetchnotices=async()=>{
      const querySnapshot = await getDocs(collection(db, "events"))
      
     
      //doc is document of collection and doc.data() is object in that doc. In book, all objects have been passed with index 0,1..
  // querySnapshot is an is an array object of docs.
  
  const data= querySnapshot.docs.map((doc)=>({...doc.data(),}));
  
  setNotices(data);
  
  setIsLoading(false) 
  
    }
    useEffect(() => {
      fetchnotices();
      }, [])

// notices.map((item)=>{
//   item.date=  Date.parse(item.date);
// })

function compare(a, b) {
  const rankA = a.date;
  const rankB = b.date;

  let comparison = 0;
  if (rankA < rankB) {
    comparison = 1;
  } else if (rankA > rankB) {
    comparison = -1;
  }
  return comparison;
}


notices.sort(compare);

const [model, setModel]= useState(false);
const [tempdata, setTempdata]= useState([]);

    const getData = (date, eventName, details, link)=> {
        let tempData = [date, eventName, details, link];
        setTempdata(item=> [1, ...tempData])
        return setModel(true);
    }

  return (
    <>
    <div style={myStyle}>
      
    <nav class="navbar navbar-expand-lg navbar-dark elegant-color " >

 
<a class="navbar-brand" href="#"><Link to="/"><img  src={ require('../assets/images/logo.jpeg')} style={{borderRadius:"10px", userSelect: "none"}} alt="image" /></Link></a>


<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
  aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">

  <i class="fa-solid fa-bars" style={{color:"white"}}></i>
</button>


<div class="collapse navbar-collapse" id="basicExampleNav">

  
  <ul class="navbar-nav mr-auto" >
  <li class="nav-item" style={{fontSize:"15px"}}>
    <Link to='/' > <a class="nav-link hover-underline-animation"  href="#"><span style={{color:"white", userSelect: "none"}}>Home<i class="fa-solid fa-house" style={{marginLeft:"4px"}}></i></span></a></Link>
    </li>
    <li class="nav-item" style={{fontSize:"15px"}}>
      <Link to='/notices' > <a class="nav-link hover-underline-animation"  href="#"><span style={{color:"white", userSelect: "none"}}>Notices<i class="fa-solid fa-bell" style={{marginLeft:"4px"}}></i></span></a></Link>
      </li>
    <li class="nav-item active" style={{fontSize:"15px"}}>
    <li class="nav-item" style={{fontSize:"15px"}}>
    <HashLink smooth to='/#projects' > <a class="nav-link hover-underline-animation"  href="#"><span style={{color:"white", userSelect: "none"}}>Featured Projects<i class="fa-solid fa-wrench" style={{marginLeft:"4px"}}></i></span></a></HashLink>
    </li>
    </li>
  <li style={{fontSize:"15px", }}>
  <a class="nav-link hover-underline-animation" target="blank" href="https://drive.google.com/file/d/1sML0h9K8s9u33vSQpi0LGo_mfQyqLxo_/view?usp=sharing"><span style={{color:"white", userSelect: "none"}}>Newsletter<i class="fa-solid fa-newspaper"style={{marginLeft:"4px"}}></i></span></a>
  </li>
    
  <li class="nav-item" style={{fontSize:"15px"}}>
    <HashLink smooth to='/#team' > <a class="nav-link hover-underline-animation"  href="#"><span style={{color:"white", userSelect: "none"}}>Team<i class="fa-solid fa-users" style={{marginLeft:"4px"}}></i></span></a></HashLink>
    </li>
   
    <li class="nav-item active"style={{fontSize:"15px", color:"white", userSelect: "none"}}>
      <a class="nav-link hover-underline-animation" href="#"  data-backdrop="false" type="button"  data-toggle="modal" data-target="#modalRegular">Location<i class="fa-solid fa-location-dot" style={{marginLeft:"4px"}}></i></a>
    </li>
   
   <li style={{fontSize:"15px",}}>
   <div><a class="nav-link hover-underline-animation " href="mailto:amuroboclub@gmail.com"><span style={{ color:"white", userSelect: "none"}}>Email<i class="fa-solid fa-envelope" style={{marginLeft:"4px"}}></i></span></a></div>
   </li>
<li style={{fontSize:"15px"}}><Link to='/contributors' > <a class="nav-link hover-underline-animation"  href="#"><span style={{color:"white", userSelect: "none", }}>Contributors<i class="fa-solid fa-heart" style={{marginLeft:"4px"}}></i></span></a></Link></li>

   
    

  </ul>



</div>


</nav>

            <div className="heading_main text_align_center" style={{paddingTop:"25px"}}>
						   <h1 style={{color:"#E5E4E2", fontWeight:"bold", fontSize:"35px", margin:"0px"}}>Notices</h1>
                        </div>


                        
{isLoading?<div className='row justify-content-center align-item-center'><Loading/></div>:
 <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true"  duration="1.4">
                        <div class="container container2">
                             
                        {notices.slice(0, 6).map((item, index)=>{
             return(
             
  <div class="card card2" key={index}>
    <div class="card__body">
      <span class="tag tag-blue" style={{userSelect: "none"}}>{item.date}</span>
      <h4 style={{ color:"black", fontWeight:"bold", userSelect: "none"}}>{item.eventName}</h4>
      <p style={{textAlign:"justify", fontWeight:"bold"}} className="trunket">{item.details}</p>
     {console.log(item.details.length)}
    </div>

    <div class="card__footer">
      
        
          {item.link?
          <a href={item.link}>Click for More</a>:""
                        }
        
    
    </div>
    {item.details.length>=320?
    <div style={{textAlign:"center"}}><a href='notice' className='hover-underline-animation1' data-backdrop="true" data-toggle="modal"  data-target="#exampleModalLong2"
    onClick={()=>getData(item.date, item.eventName, item.details, item.link)} style={{fontSize:"20px", color:"black", userSelect:"none"}}>View More</a></div>:""
    }    
    <br/>             
  </div>
  )
})} 
</div></AnimationOnScroll>}

<br/>   

    </div>
    <Location/>
    <Footer/>
    {
     model === true ? <NoticeModal date={tempdata[1]} eventName={tempdata[2]} details={tempdata[3]} link={tempdata[4]} hide={()=>setModel(false)}/>: ''
   }
   
    </>
  )
}

export default Notices
