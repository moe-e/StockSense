import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './Home/Home.jsx'
import Explore from './Explore/Explore.jsx'



function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  </Router>
  )
}

export default App
