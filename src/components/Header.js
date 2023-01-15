// import React from 'react'
// import { Link } from "react-router-dom";
//  import Dropdown from 'react-bootstrap/Dropdown';

// const Header = ({active, setActive, user, handleLOgout}) => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div class="container-fluid">
//                 <a className="navbar-brand" href="index.html"><img src={ require('../assets/images/logo.jpeg')} alt="image" /></a></div>
//     <div className="container-fluid bg-faded padding-media">
//       <div className="container padding-media">
//         <nav className="navbar navbar-toggleable-md navbar-light">
          
//             <div className="collapse navbar-collapse">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='navbarSupportedContent'>
//               {/* <Link to="/" style={{ textDecoration: "none" }}><li className={`nav-item nav-link ${
//                       active === "home" ? "active" : ""
//                     }`} onClick={() => setActive("home")}>Home</li></Link> */}
              
//               {/* <Link to="/blogs" style={{ textDecoration: "none" }}><li className={`nav-item nav-link ${
//                       active === "blogs" ? "active" : ""
//                     }`} onClick={() => setActive("blogs")}>Blogs</li></Link> */}
//               {/* <Link to="/contact" style={{ textDecoration: "none" }}><li className={`nav-item nav-link ${
//                       active === "contact" ? "active" : ""
//                     }`} onClick={() => setActive("contact")}>Contribute<i style={{marginLeft:"5px"}} class="fa-solid fa-heart"></i></li></Link> */}
//               {/* <Link to="/join-us" style={{ textDecoration: "none" }}><li className={`nav-item nav-link ${
//                       active === "join-us" ? "active" : ""
//                     }`} onClick={() => setActive("join-us")}>Join</li></Link>       */}
//               </ul>
//             </div>
//             {/* <div className="row g-3">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               {user?.uid ? (
//                     <>
//                          <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//       <div className="profile-logo">
//       <img
//         src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
//         alt="logo"
//         style={{
//           // width: "30px",
//           // height: "30px",
//           // borderRadius: "50%",
//           // marginTop: "12px",
//           width: "25px",
//           height: "25px",
//           objectFit: "cover",
//           borderRadius: "50%",
//         }}
//       />
//     </div>
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item ><p>
//         {user?.displayName}
//       </p></Dropdown.Item>
//         <Dropdown.Item >Another action</Dropdown.Item>
//         <Dropdown.Item ><li className="nav-item nav-link" >
//         Logout
//       </li></Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//                     </>
//                   ) : (
//                     <Link to="/auth" style={{ textDecoration: "none" }}>
//                       <li
//                         className={`nav-item nav-link ${
//                           active === "login" ? "active" : ""
//                         }`}
//                         onClick={() => setActive("login")}
//                       >
//                         Login
//                       </li>
//                     </Link>
//                   )}
                  
//               </ul>
//             </div> */}
//         </nav>
//       </div>
//     </div>
//     </nav>
//   )
// }

// export default Header
