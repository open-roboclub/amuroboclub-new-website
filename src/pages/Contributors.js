import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { getDocs, collection} from "firebase/firestore"; 
import { db } from '../firebase';
import Footer from '../components/Footer';
import '../assets/ComponentDesign/Contributors.css';
const Contributors = () => {
  const myStyle={
    backgroundImage: 
"url('https://res.cloudinary.com/amuroboclub/image/upload/v1673816613/2022-23_website_react/About/background2.jpg')",
opacity: 0.97,
    // backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    justifyContent: 'center',
    alignItems: 'center',
};



const [contributors,setContributors]=useState([])
const fetchContributors=async()=>{
  const querySnapshot = await getDocs(collection(db, "contributors"))
  
 
  //doc is document of collection and doc.data() is object in that doc. In book, all objects have been passed with index 0,1..
// querySnapshot is an is an array object of docs.

const data= querySnapshot.docs.map((doc)=>({...doc.data(),}));

setContributors(data);



}
useEffect(() => {
  fetchContributors();
  }, [])

console.log(contributors)

  return (
    <>
    <div style={myStyle}>
     <nav class="navbar navbar-expand-lg navbar-dark elegant-color " >
<a class="navbar-brand" href="#"><Link to="/"><img src={ require('../assets/images/logo.jpeg')} style={{borderRadius:"10px", userSelect: "none"}} alt="image" /></Link></a>
</nav> 
            <div className="heading_main text_align_center" style={{paddingTop:"25px"}}>
						   <h1 style={{color:"#E5E4E2", fontWeight:"bold", fontSize:"35px", margin:"0px"}}>Our Contributors</h1>
                        </div>

    



                
 
 
    <div className='container container8  ' >
    <div className='card-deck justify-content-center'>
    {contributors.map((item, index)=>{
             return(
            

    <div class=" card8 " key={index} style={{marginLeft:"2px", marginRight:"2px"}}>
        <div class="face face1">
            <div class="content">
           <div>
                <h3 style={{color:"white", fontSize:"17px"}}>{item.name}</h3></div>
            
                <div>
                <h3 style={{color:"white"}}><i class="fa-solid fa-1x fa-heart" style={{color:"white", marginRight:"4px"}}></i><i class="fa-solid fa-handshake" style={{marginLeft:"4px",color:"white"}}></i></h3></div>
                
            </div>
            
        </div>
        <div class="face face2">
            <div class="content">
            
            <h1 style={{color:"white"}}>{item.amount}</h1><br/><br/>
            <h6 style={{color:"white" }}>{item.description}</h6>
                    <p >{item.date}</p>
                    
           
            </div>
           
            
        </div>
    </div>
 
      )
         })}
       
   

   
    </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Contributors;
