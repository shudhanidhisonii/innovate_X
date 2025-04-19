import React from 'react'
import Navbar from '../Navbar'
import Fact from '../Fact'
import Footer from '../Footer'
import SustainabilityExplorer from '../SustainabilityExplorer'
import CardComponent from '../CardComponents'
import About from '../About'


const Home = () => {
  return (
    <>
    <Navbar />
    <About />
   <CardComponent />
    <Fact />
    <SustainabilityExplorer />
    <Footer />
    </>
  )
}

export default Home
