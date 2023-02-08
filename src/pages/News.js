import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../assets/ComponentDesign/News.css';
import Footer from '../components/Footer';
import NoticeModal from '../components/NoticeModal';
import Loading from '../components/LoadingStyle';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { HashLink } from 'react-router-hash-link';
import Location from '../components/Location';

const News = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [newsArray, setNewsArray]= useState([]);

useEffect(()=>{
    fetch("https://newsapi.org/v2/everything?q=robotics OR nanotechnology&apiKey="+process.env.REACT_APP_NEWS_API_KEY).then(response=>response.json()).then(
        (data)=>{
            setIsLoading(false)
        setNewsArray(data.articles)})
        
},[])



    const myStyle={
        backgroundImage: 
    "url('https://res.cloudinary.com/amuroboclub/image/upload/v1673816613/2022-23_website_react/About/background2.jpg')",
    opacity: 0.95,
        // backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
    };
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

<li style={{fontSize:"15px"}}><Link to='/news' > <a class="nav-link hover-underline-animation"  href="#"><span style={{color:"white", userSelect: "none", }}>News<i class="fa-solid fa-radio" style={{marginLeft:"4px"}}></i></span></a></Link></li>
    

  </ul>



</div>


</nav>

            <div className="heading_main text_align_center" style={{paddingTop:"25px"}}>
						   <h1 style={{color:"#E5E4E2", fontWeight:"bold", fontSize:"35px", margin:"0px"}}>Top Tech News</h1>
                        </div>


                        
{isLoading?<div className='row justify-content-center align-item-center'><Loading/></div>:
 <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true"  duration="1.4">
                        <div class="container container3">
                             
                        {newsArray.slice(0, 51).map((item, index)=>{
             return(
             
  <div class="card card3" key={index}>
    {item.urlToImage?<img src={item.urlToImage} class="card-img-top" alt="your-image-description"></img>:<img src="https://res.cloudinary.com/amuroboclub/image/upload/v1675877287/2022-23_website_react/About/imagealt.jpg" class="card-img-top" alt="your-image-description"></img>}
    <div class="card__body">
      <span class="tag tag-blue1" style={{userSelect: "none"}}>{item.publishedAt}</span>
      <h4 style={{ color:"#c8bfbf", fontWeight:"bold", userSelect: "none", textAlign:"justify"}}>{item.title}</h4>
      <p style={{textAlign:"justify", fontWeight:"bold", color:"#c8bfbf"}} className="trunket">{item.description}</p>
    </div>

    <div class="card__footer" >  
    <div style={{textAlign:"center"}}><a href={item.url} target="_blank" className='hover-underline-animation2'  
     style={{fontSize:"20px", color:"#c8bfbf", userSelect:"none"}}>View More</a></div>
    </div>
  
    <br/>             
  </div>
  )
})} 
</div></AnimationOnScroll>}

<br/>   

    </div>
    <Location/>
    <Footer/>
   
    </>
  )
}

export default News
