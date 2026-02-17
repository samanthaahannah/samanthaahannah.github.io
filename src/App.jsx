import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Intro from "./Intro.jsx";
import Navbar from "./Navbar.jsx";
import Projects from "./Projects.jsx";
import Header from "./Header.jsx";

function App() {
  const info = {name: "Samantha", location: "Edinburgh"}
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Intro info={info} />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App