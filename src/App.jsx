import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Home from './pages/Home';
import About from './pages/About';
import Facilities from './pages/Facilities';
import Blog from './pages/Blog';



const App = () => {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Facilities" element={<Facilities />} /> 
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  )
}

export default App