'use client';
import React from 'react'
import '../style/hero.css'
import { TypeAnimation } from "react-type-animation";
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero-section" >
    <div className='hero'>
     {/* content side */}
     <div className="content">
     <span className='hello'>
     Hello! I'm <br />
              </span>{" "}
              
              <TypeAnimation
                sequence={[
                 
                  "Alina Fatima",
                  1000, 
                  "Frontend Developer",
                  1000,
                ]}
                wrapper="span"
                speed={60}
                repeat={Infinity}
              />
            

    <p>
    I create responsive and high-performance web applications that  deliver seamless user experiences across all devices.
    </p> 
    <div className='btn'>
    <button className='btn1'>Hire Me</button>
    <button className='btn2'>Download CV</button>
  </div>
   </div>


     {/* image side */}
     <div className="image">
      <Image src='/images/img.png' alt='ProfileImg' width={350} height={350}
      className='design' />
    
     </div>

    </div>
    </section>
  )
}

export default Hero;
