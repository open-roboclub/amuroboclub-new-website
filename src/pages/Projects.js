import Projectdata from "../assets/cms/Projectdata";
import Modals from "../components/Modals";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import featuredProjects from "../assets/cms/constants";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Footer from "../components/Footer";
import "../assets/ComponentDesign/Projects.css";
import { HashLink } from "react-router-hash-link";
import Location from "../components/Location";
import Loading from "../components/LoadingStyle";
const Projects = () => {
  const myStyle = {
    backgroundImage:
      "url('https://res.cloudinary.com/amuroboclub/image/upload/v1673816613/2022-23_website_react/About/background2.jpg')",
    opacity: 0.95,
    // backgroundSize: 'cover',
    backgroundRepeat: "repeat",
  };

  const [isLoading, setIsLoading] = useState(true);

  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const querySnapshot = await getDocs(collection(db, "projects"));

    //doc is document of collection and doc.data() is object in that doc. In book, all objects have been passed with index 0,1..
    // querySnapshot is an is an array object of docs.

    const data = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
    console.log(data);
    setBlogs(data);

    setIsLoading(false);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  const [model, setModel] = useState(false);
  const [tempdata, setTempdata] = useState([]);

  const getData = (img, name, description, progress, teamMembers, date) => {
    let tempData = [img, name, description, progress, teamMembers, date];
    setTempdata((item) => [1, ...tempData]);
    return setModel(true);
  };

  return (
    <>
      <div style={myStyle}>
        <nav class="navbar navbar-expand-lg navbar-dark elegant-color ">
          <a class="navbar-brand" href="#">
            <Link to="/">
              <img
                src={require("../assets/images/Vlogo.png")}
                style={{ borderRadius: "10px", userSelect: "none" }}
                alt="image"
              />
            </Link>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#basicExampleNav"
            aria-controls="basicExampleNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars" style={{ color: "white" }}></i>
          </button>

          <div class="collapse navbar-collapse" id="basicExampleNav">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item" style={{ fontSize: "14px" }}>
                <Link to="/">
                  {" "}
                  <a class="nav-link hover-underline-animation" href="#">
                    <span style={{ color: "white", userSelect: "none" }}>
                      Home
                    </span>
                  </a>
                </Link>
              </li>
              <li class="nav-item" style={{ fontSize: "14px" }}>
                <Link to="/notices">
                  {" "}
                  <a class="nav-link hover-underline-animation" href="#">
                    <span style={{ color: "white", userSelect: "none" }}>
                      Notices
                    </span>
                  </a>
                </Link>
              </li>
              <li class="nav-item" style={{ fontSize: "14px" }}>
                <Link to="/upcomingprojects">
                  {" "}
                  <a class="nav-link hover-underline-animation" href="#">
                    <span style={{ color: "white", userSelect: "none" }}>
                      Project Recruitment
                    </span>
                  </a>
                </Link>
              </li>

              <li class="nav-item" style={{ fontSize: "14px" }}>
                <Link to="/blogs">
                  {" "}
                  <a class="nav-link hover-underline-animation" href="#">
                    <span style={{ color: "white", userSelect: "none" }}>
                      Blogs
                    </span>
                  </a>
                </Link>
              </li>

              <li class="nav-item active" style={{ fontSize: "13px" }}>
                <Link to="/projects">
                  <a
                    class="nav-link hover-underline-animation"
                    href="/projects"
                  >
                    <span style={{ color: "white", userSelect: "none" }}>
                      Projects
                    </span>
                  </a>
                </Link>
              </li>
              <li style={{ fontSize: "14px" }}>
                <a
                  class="nav-link hover-underline-animation"
                  target="blank"
                  href="https://drive.google.com/file/d/1sML0h9K8s9u33vSQpi0LGo_mfQyqLxo_/view?usp=sharing"
                >
                  <span style={{ color: "white", userSelect: "none" }}>
                    Newsletter
                  </span>
                </a>
              </li>

              <li class="nav-item" style={{ fontSize: "14px" }}>
                <HashLink smooth to="/#team">
                  {" "}
                  <a class="nav-link hover-underline-animation" href="#">
                    <span style={{ color: "white", userSelect: "none" }}>
                      Team
                    </span>
                  </a>
                </HashLink>
              </li>

              <li
                class="nav-item active"
                style={{ fontSize: "14px", color: "white", userSelect: "none" }}
              >
                <a
                  class="nav-link hover-underline-animation"
                  href="#"
                  data-backdrop="false"
                  type="button"
                  data-toggle="modal"
                  data-target="#modalRegular"
                >
                  Location
                </a>
              </li>

              <li style={{ fontSize: "14px" }}>
                <div>
                  <a
                    class="nav-link hover-underline-animation "
                    href="mailto:amuroboclub@gmail.com"
                  >
                    <span style={{ color: "white", userSelect: "none" }}>
                      Email
                    </span>
                  </a>
                </div>
              </li>
              <li style={{ fontSize: "14px" }}>
                <Link to="/contributors">
                  {" "}
                  <a class="nav-link hover-underline-animation" href="#">
                    <span style={{ color: "white", userSelect: "none" }}>
                      Contributors
                    </span>
                  </a>
                </Link>
              </li>
              {/* <li style={{fontSize:"15px"}}><Link to='/news' > <a class="nav-link hover-underline-animation"  href="#"><span style={{color:"white", userSelect: "none", }}>News<i class="fa-solid fa-radio" style={{marginLeft:"4px"}}></i></span></a></Link></li> */}
            </ul>
          </div>
        </nav>

        {/* <div className="heading_main text_align_center" style={{paddingTop:"25px"}}>
						   <h1 style={{color:"#E5E4E2", fontWeight:"bold", fontSize:"35px", margin:"0px"}}>Our Projects</h1>
                        </div>
       










                      
  {isLoading ?   <div className='row justify-content-center align-item-center'><Loading/></div>:   <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true"  duration="1.4"><section className='py-4 py-lg-5 container'  >

        <div className='row justify-content-center align-item-center'>

         {blogs.map((item, index)=>{
             return(
                 <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' key={index}>
                 <div className="card p-0 overflow-hidden h-100 shadow align-items-center" >
                 <img className="card-img-top" src={item.projectImg[0]} alt="Card image cap" style={{height: "167px", width: "167px", borderRadius: "50%",
                display: "flex",
                paddingTop: "8px"}}/>
                         <div className="card-body text-center">
                                <h5 className="card-title" title={item.name} style={{textOverflow: "ellipsis", overflow: "hidden", whiteSpace:"nowrap", width:"180px"}}>{item.name}</h5>
                                 <p className="card-text"></p>
                                  <button class="btn btn-primary btn-dark" data-backdrop="true" data-toggle="modal"  data-target="#exampleModalLong"
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
   </section></AnimationOnScroll>
}
 

   </div>
   <Location/>
  <Footer/>
  {
     model === true ? <Modals img={tempdata[1]} name={tempdata[2]} description={tempdata[3]} progress={tempdata[4]} teamMembers={tempdata[5]} date={tempdata[6]} hide={()=>setModel(false)}/>: ''
   } */}
        <div
          className="heading_main text_align_center"
          style={{ paddingTop: "25px" }}
        >
          <h1
            style={{
              color: "#E5E4E2",
              fontWeight: "bold",
              fontSize: "35px",
              margin: "0px",
            }}
          >
            Our Projects
          </h1>
        </div>

        {isLoading ? (
          <div className="row justify-content-center align-item-center">
            <Loading />
          </div>
        ) : (
          <AnimationOnScroll
            animateIn="animate__fadeIn"
            animateOnce={true}
            duration="1.4"
          >
            <section className="py-4 py-lg-5 container">
              <div className="row justify-content-center align-item-center">
                {blogs.map((item, index) => (
                  <div
                    className="col-11 col-md-6 col-lg-3 mx-0 mb-4"
                    key={index}
                  >
                    <div className="card p-0 overflow-hidden h-100 shadow align-items-center" >
                 {/* <img className="card-img-top" src={item.projectImg[0]} alt="Card image cap" style={{height: "167px", width: "167px", borderRadius: "50%",
                display: "flex",
                paddingTop: "8px"}}/> */}
                         <div className="card-body text-center">
                                <h5 className="card-title" title={item.name} style={{textOverflow: "ellipsis", overflow: "hidden", whiteSpace:"nowrap", width:"180px"}}>{item.name}</h5>
                                 <p className="card-text"></p>
                                  <button className="btn btn-primary btn-dark" data-backdrop="true" data-toggle="modal"  data-target="#exampleModalLong"
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
                ))}
              </div>
            </section>
          </AnimationOnScroll>
        )}

        <Location />
        <Footer />

        {model && (
          <Modals
            img={tempdata[1]}
            name={tempdata[2]}
            description={tempdata[3]}
            progress={tempdata[4]}
            teamMembers={tempdata[5]}
            date={tempdata[6]}
            hide={() => setModel(false)}
          />
        )}
      </div>
    </>
  );
};

export default Projects;
