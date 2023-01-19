import Projectdata from '../assets/cms/Projectdata'
import Modals from '../components/Modals';
import { Link } from "react-router-dom";
import { db } from '../firebase';
import React,{useState,useEffect} from 'react';
import { getDocs, collection} from "firebase/firestore"; 
import featuredProjects from '../assets/cms/constants';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Footer from '../components/Footer';

const Projects = () => {
  const myStyle={
    backgroundImage: 
"url('https://res.cloudinary.com/amuroboclub/image/upload/v1673816613/2022-23_website_react/About/background2.jpg')",
opacity: 0.97,
    // backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
};








  const [blogs,setBlogs]=useState([])
  const fetchBlogs=async()=>{
    const querySnapshot = await getDocs(collection(db, "projects"))
    
   
    //doc is document of collection and doc.data() is object in that doc. In book, all objects have been passed with index 0,1..
// querySnapshot is an is an array object of docs.

const data= querySnapshot.docs.map((doc)=>({...doc.data(),}));

setBlogs(data);


console.log(blogs);




  }
  useEffect(() => {
    fetchBlogs();
    }, [])

  

    const [model, setModel]= useState(false);
    const [tempdata, setTempdata]= useState([]);
    
        const getData = (img, name, description, progress, teamMembers, date)=> {
            let tempData = [img, name, description, progress, teamMembers, date];
            setTempdata(item=> [1, ...tempData])
            return setModel(true);
        }





  return (
    <>
   
    <div style={myStyle}>
   




    <nav class="navbar navbar-expand-lg navbar-dark elegant-color " >

 
<a class="navbar-brand" href="#"><Link to="/"><img src={ require('../assets/images/logo.jpeg')} style={{borderRadius:"10px", userSelect: "none"}} alt="image" /></Link></a>







</nav>



           
            <div className="heading_main text_align_center" style={{paddingTop:"25px"}}>
						   <h1 style={{color:"#E5E4E2", fontWeight:"bold", fontSize:"35px", margin:"0px"}}>Our Projects</h1>
                        </div>
       











   <section className='py-4 py-lg-5 container'  >
        <div className='row justify-content-center align-item-center'>
         {blogs.map((item, index)=>{
             return(
                 <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' key={index}>
                 <div className="card p-0 overflow-hidden h-100 shadow align-items-center" >
                 <img className="card-img-top" src={item.projectImg[0]} alt="Card image cap" style={{height: "167px", width: "167px", borderRadius: "50%",
                display: "flex",
                paddingTop: "8px"}}/>
                         <div className="card-body text-center">
                                <h5 className="card-title" style={{textOverflow: "ellipsis", overflow: "hidden", whiteSpace:"nowrap", width:"180px"}}>{item.name}</h5>
                                 <p className="card-text"></p>
                                  <button class="btn btn-primary btn-dark" data-backdrop="false" data-toggle="modal"  data-target="#exampleModalLong"
                                  onClick={()=>getData(item.projectImg[0], item.name, item.description, item.progress, item.teamMembers, item.date)}>More Information
                                 </button>
                                  </div>
                                  {
                                     item.progress === "100"? <>
                                     <div style={{color:"green"}}>
                                     Completed</div><div><i class="fa-solid fa-3x fa-medal" style={{color:"green"}}></i></div>
                                     </>: <>
                                     <div style={{color:"purple"}}>
                                     In progress</div><div><i class="fa-solid fa-3x fa-wrench" style={{color:"purple"}}></i></div>
                                     </>
                                     }
                                     <br/>
                                    </div>
                 </div>
             )
         })}
       
        </div>
   </section>
 
   {
     model === true ? <Modals img={tempdata[1]} name={tempdata[2]} description={tempdata[3]} progress={tempdata[4]} teamMembers={tempdata[5]} date={tempdata[6]} hide={()=>setModel(false)}/>: ''
   }

   </div>
  <Footer/>
 </>
  )
}

export default Projects;
