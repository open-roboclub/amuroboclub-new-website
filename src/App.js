import React from 'react';
//import { AppBar, Container, Toolbar, Typography, Box, Button, Badge, IconButton, CssBaseline } from '@material-ui/core';
//import useStyles from './styles';
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { ToastContainer } from "react-toastify";
import {auth} from './firebase';
import About from "./pages/About";
import Auth from "./pages/Auth";
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import "react-toastify/dist/ReactToastify.css";
import './styles.scss';
import "./media-query.css";
import { signOut } from 'firebase/auth';
//import './styles.css';

const App = () => {
  const [active, setActive]= useState('home'); //passing functions, variables as props to child component
  const [user, setUser] = useState(null);
  const navigate= useNavigate();
  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogout= ()=>{
     signOut(auth).then(()=>{
      setUser(null);
      setActive("login");
      navigate("/auth");
     })
  };

  return (
    <div>
      <Header setActive={setActive} active={active} user={user} handleLogout={handleLogout}/>
      <ToastContainer position='top-center' />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Auth setActive={setActive}  />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  )
}

export default App
