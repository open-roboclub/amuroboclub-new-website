import React from 'react'
import { Link } from "react-router-dom";
import './styles.css';

const Header = ({active, setActive, user}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid bg-faded padding-media">
      <div className="container padding-media">
        <nav className="navbar navbar-toggleable-md navbar-light">
          <button
            className="navbar-toggler mt-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            data-bs-parent="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle Navigation"
          >
            <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='navbarSupportedContent'>
              <Link to="/" style={{ textDecoration: "none" }}><li className={`nav-item nav-link ${
                      active === "home" ? "active" : ""
                    }`} onClick={() => setActive("home")}>Home</li></Link>
              <Link to="/about" style={{ textDecoration: "none" }}><li className={`nav-item nav-link ${//three are names of route
                      active === "about" ? "active" : ""
                    }`} onClick={() => setActive("about")}>About</li></Link>
              <Link to="/blogs" style={{ textDecoration: "none" }}><li className={`nav-item nav-link ${
                      active === "blogs" ? "active" : ""
                    }`} onClick={() => setActive("blogs")}>Blogs</li></Link>
              <Link to="/contact" style={{ textDecoration: "none" }}><li className={`nav-item nav-link ${
                      active === "contact" ? "active" : ""
                    }`} onClick={() => setActive("contact")}>Contact</li></Link>
              {/* <Link to="/join-us" style={{ textDecoration: "none" }}><li className={`nav-item nav-link ${
                      active === "join-us" ? "active" : ""
                    }`} onClick={() => setActive("join-us")}>Join</li></Link>       */}
              </ul>
            </div>
            <div className="row g-3">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/login" style={{ textDecoration: "none" }}><li className={`nav-item nav-link ${
                      active === "login" ? "active" : ""
                    }`} onClick={() => setActive("login")}>Login</li></Link>
              </ul>
            </div>
        </nav>
      </div>
    </div>
    </nav>
  )
}

export default Header
