import React from 'react'
import style from'./Contact.module.css'
export default function 
di() {
  return (
   <section>
    <div className=''>
        <div className={ ` `}>
            <h2 className={` text-center ${style.h}`}>Contact Me</h2>
            <form className={`text-center d-flex flex-column grid gap-0 row-gap-3 `}> 
                <div>
                    <label for ="name">Full Name</label>
                    <input type="text" id="name" />
                </div>
                <div>
                    <label for ="email">Email Adress</label>
                    <input type="text" id="email" />
                </div>
                <div>
                    <label for ="Phone">Phone Number</label>
                    <input type="text" id="Phone" />
                </div>
                <div>
                    <label for ="Message">Message</label>
                    <input type="text" id="Message" />
                </div>
                <div>
                    <button className={` ms-5  mt-5 ${style.btn}`}>Send</button>
                </div>
              
            </form>
          
        </div>

    </div>
   </section>
  )
}
