import React from 'react'
import style from './Portfolio.module.css'
export default function 
() {
  return (
    <div className='container'> 
    <div>
        <h2 className={` porth2 text-center pt-5 ${style.porth2}`} >PORTFOLIO</h2>
    </div>
    <div className={` py-5  d-flex flex-colomn grid gap-0 column-gap-5 ${style.portfolio}`}>
<img src="./public/img1.png"/>
<img src="./public/img2.png"/>
<img src="./public/img3.png"/>
    </div>
    <div className={` d-flex flex-colomn grid gap-0 column-gap-5 ${style.portfolio}`}>
<img src="./public/img4.png"/>
<img src="./public/img5.png"/>
<img src="./public/img6.png"/>
    </div>
    </div>
  )
}
