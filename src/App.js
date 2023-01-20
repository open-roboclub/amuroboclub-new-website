import React, { useState } from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contributors from './pages/Contributors';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Robocon2023 from './pages/Robocon2023';
import Notices from './pages/Notices';
const App = () => {
  return (
    <div>
       <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/robocon2023" element={<Robocon2023/>}/>
          <Route path='/notices' element={<Notices/>}/>
          <Route path='/contributors' element={<Contributors/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
