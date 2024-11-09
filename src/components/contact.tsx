import React from 'react'
import '../style/contact.css'
import Image from 'next/image';

const Contact = () => {
  return (
    <section className='contact-section' id='contact'>
      <div className="contact">
       <div className="heading3">CONTACT ME</div> 
      
      <div className="cover">
        {/* left side */}
        <div className="details">
        <div className="name"> 
           <p>Enter Your Name:</p> 
            <input type="text"/>
        </div>
        <div className="email">
        <p>Enter Your Email:</p>
         <input type="text"/>
        </div>
        <div className="message"> 
            <p>Leave Message:</p> 
        <textarea id="message" rows={5}  />
        </div>
        <button>Submit</button>
      </div>
      {/* right side */}
      <div className="picture">
      <Image 
      src='/images/ayn01.jpg'
       alt='ProfileImg'
       width={300} height={300}
      className='design1' />

      </div>
      </div>
      </div>
    </section>
  )
}

export default Contact;
