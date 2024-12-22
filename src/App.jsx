import React from 'react'


import Navbar from './components/navbar/Navbar.jsx'
import Start from './components/srart/Start.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import About from './components/about/About.jsx'
import Footer from './components/footer/Footer.jsx'
import Contact from './components/contact/Contact.jsx'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
     <Navbar/>
     <Start/>
     <Routes>
      
      <Route path='/portfolio' element={<Portfolio/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
     
      
     </Routes>
 
    <Footer/>

    </div>
  )
}
