import React from 'react'
import Home from './components/home/Home'
import { Navigate, Route, Routes } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Faq from './components/Faq';
import Complain from './components/Complain';
import Particle from './components/Particle';
// import { loadSlim } from "@tsparticles/slim";



const App = () => {
  return (
    <>
    <Particle />
   <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Faq" element={<Faq />} />
        
        <Route path="/Complain" element={<Complain />} />
      </Routes>
    </>
  )
}

export default App
