
import Projectdata from '../assets/cms/Projectdata'
import Modals from './Modals';
import { Link } from "react-router-dom";
import { db } from '../firebase';
import React,{useState,useEffect} from 'react';
import { getDocs, collection} from "firebase/firestore"; 
import featuredProjects from '../assets/cms/constants';

import content from "../assets/cms/content.json"


import '../assets/ComponentDesign/Modal.css';





const Cards = () => {
  // var content = [];
  
  


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

  

    // const [model, setModel]= useState(false);
    // const [tempdata, setTempdata]= useState([]);
    
        // const getData = (img, name, description, progress, teamMembers, date)=> {
        //     let tempData = [img, name, description, progress, teamMembers, date];
        //     setTempdata(item=> [1, ...tempData])
        //     return setModel(true);
        // }

        



  


  return (
    <>
       {/* <div id='projects'>
      
      {/* <section className='py-4 py-lg-5 container'  >
           <div className='row justify-content-center align-item-center'>
            {/* {blogs.filter(blog => featuredProjects.includes(blog.name) ).map((item, index)=>{ */}
                 {/* return( */}
                    {/* Robocon2023 */}
	{/*<div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' >
                    <div className="card p-0 overflow-hidden h-100 shadow align-items-center" >
                    <img className="card-img-top" src={content[0].projectImages[0].image} alt="Card image cap" style={{height: "167px", width: "167px", borderRadius: "50%",
                   display: "flex",
                   paddingTop: "8px"}}/>
                            <div className="card-body text-center">
                                   <h5 className="card-title" style={{textOverflow: "ellipsis", overflow: "hidden", whiteSpace:"nowrap", width:"180px"}}>Robocon 2023</h5>
                                    <p className="card-text"></p>
                                    


                                    
                                    <button class="btn btn-primary btn-dark"  
                                  ><Link to="/robocon2023" style={{color:"white"}}>More Information</Link>
                                 </button>
            
                                     </div>
                                     
                                     <>
                                     <div style={{color:"purple"}}>
                                     In progress</div><div><i class="fa-solid fa-3x fa-wrench" style={{color:"purple"}}></i></div>
                                     </>
                                     
                                     <br/>
                                       </div>
                    </div>*/}

                     {/* AMU Nano SAT */}
                    {/* <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' >
                    <div className="card p-0 overflow-hidden h-100 shadow align-items-center" >
                    <img className="card-img-top" src={content[0].projectImages[1].image} alt="Card image cap" style={{height: "167px", width: "167px", borderRadius: "50%",
                   display: "flex",
                   paddingTop: "8px"}}/>
                            <div className="card-body text-center">
                                   <h5 className="card-title" style={{textOverflow: "ellipsis", overflow: "hidden", whiteSpace:"nowrap", width:"180px"}}>SS AMU SAT</h5>
                                    <p className="card-text"></p>
                                    


                                    
                                  <a href="https://amu-sat.github.io/" ><button class="btn btn-primary btn-dark"
                                  >More Information
                                 </button></a>  
            
                                     </div>
                                     
                                     <>
                                     <div style={{color:"purple"}}>
                                     In progress</div><div><i class="fa-solid fa-3x fa-wrench" style={{color:"purple"}}></i></div>
                                     </>
                                     
                                     <br/>
                                       </div>
                    </div> */}
                {/* // ) */}
            {/* // })}
          
           </div>
      </section> 

    
 
      </div> 
      */}
						   
                        
         {/* <div class="row">
           
         <div className="heading_main text_align_center" >
         <Link to="/projects" style={{ fontDecoration: "none" }}>  <button type="button" className="btn10 success"> More Projects </button></Link></div>
         </div> */}
      
    </>
  )
}

export default Cards
