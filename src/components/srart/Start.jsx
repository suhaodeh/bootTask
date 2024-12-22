import React from 'react'
import style from './Start.module.css'
export default function () {
  return (
   <section className={`text-center ${style.start}`}>
    <div >
        <div className= {` pt-5 ${style.avatar}`}>
      <img src='./avatar.jpg'/>
        </div>
        <div className='p-5 grid gap-0 row-gap-3'>
            <h2 className=''>START BOOTSTRAP</h2>
            <h4 className=''>Graphic Artist - Web Designer - Illustrator</h4>
        </div>
    </div>
   </section>
  )
}
