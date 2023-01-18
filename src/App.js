import React, { useState } from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Robocon2023 from './pages/Robocon2023';
import Project from './pages/Project';
const App = () => {
// const [project, setProject]= useState([]);
  return (
    <div>
       <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/robocon2023" element={<Robocon2023/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
