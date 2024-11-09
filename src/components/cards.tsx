import React from 'react'
import '../style/cards.css'
import Image from 'next/image'
import Link from 'next/link'

interface card {
  imageSrc : string,
  nameCall: string,
  paragraph: string
}

const Cards = ({imageSrc, nameCall, paragraph}:card) => {
  return (
    <div className='cards'>
      <div className="outer">
         <Link href="https://github.com/AynnFatima999/PROJECT01_CALCULATOR">
        <Image 
        src= {imageSrc}
        alt='Image'
        height={60}
        width={60}
        className='innerImg'
        />
       

      <div className="name">{nameCall}</div> </Link>
      <div className="para">{paragraph}
      </div> 
      
      </div>
    </div>
  )
}

export default Cards;
