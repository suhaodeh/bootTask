import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './Footer.module.css'

export default function Footer() {
  return (
   <section className={`pt-5 mt-5 ${style.footer}`}>
    <div className={`d-flex text-center pb-5 justify-content-around container `}>
    <div>
        <h2>Location</h2>
        <h4>2215 John Daniel Drive</h4>
    <h4>Clark, MO 65243</h4>
    </div>
    <div>
    <h2>Around the Web</h2>
    </div>
    <FontAwesomeIcon icon="fa-brands fa-facebook" />
    <FontAwesomeIcon icon="fa-brands fa-square-twitter" />
   
    <div>
        <h2>About Freelancer</h2>
        <h4>Freelance is a free to use, MIT licensed</h4>
        <h4>Bootstrap theme created by Start Bootstrap </h4>
    </div>
    </div>
   </section>
  )
}
