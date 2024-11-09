'use client';
import { TypeAnimation } from 'react-type-animation';
import '../style/about.css'

import React from 'react'

const About = () => {
  return (
    <section className='about-section' id='about'>
      <div className="about">
      <div className="heading"> 
        <TypeAnimation
            sequence={["ABOUT", 500, "ME..", 500]}
            style={{ fontSize: "1em" }}
            speed={40}
            repeat={Infinity}
          /></div>

          <div className="background">
            <p>
            "I’m a passionate Front-End Web Developer with expertise in crafting visually appealing, responsive, and user-friendly websites. I specialize in HTML, CSS, JavaScript, and modern frameworks like Next.js and React, with a deep focus on Tailwind CSS for rapid, customizable UI design. My goal is to turn creative ideas into functional, high-performing websites that deliver seamless user experiences across devices. With a strong eye for design and attention to detail, I prioritize clean, maintainable code and optimized performance. Whether building dynamic single-page applications or robust websites, I aim to bridge the gap between design and development.Let’s create something amazing together!",

            </p>
          </div>
</div>



    </section>
  )
}

export default About;
