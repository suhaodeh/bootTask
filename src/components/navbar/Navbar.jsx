import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
   <section className={` ${style.nav}`}>
    <div className=" container py-4 d-flex justify-content-between align-items-center" >
    <div>
        <h3>START BOOTSTRAP</h3>
    </div>
    <div className='d-flex grid gap-0 column-gap-3'>
     
   <Link className={`${style.link }`} to={'/portfolio'}>PORTFOLIO</Link>
    <Link className={`${style.link }`} to={'/about'}>ABOUT</Link>
    <Link className={`${style.link }`} to={'/contact'}>CONTACT</Link>
      
    </div>
   
    </div>
   </section>
  )
}
