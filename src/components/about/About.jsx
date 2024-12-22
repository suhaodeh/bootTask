import React from 'react'
import style from './About.module.css'
export default function () {
  return (
  <section className={`about pt-5 mt-5 grid gap-0 row-gap-3 d-flex flex-column text-center ${style.test}`}>
    <div>
      <h2>ABOUT</h2>
    </div>
    <div className={`pt-5 d-flex grid gap-0 column-gap-5 justify-content-center `}>
      <p className='w-25'>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      <p className='w-25'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
    </div>
    <div className={`p-5 ${style.free}`}><a href='#'>FREE DOWNLOAD</a></div>
  </section>
  )
}
