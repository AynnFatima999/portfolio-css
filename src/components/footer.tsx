import React from 'react'
import '../style/footer.css'
import Link from 'next/link';

const Footer = () => {
  return (
    <section className='footer-section'>
      <div className="footer">
        <div className="dev">DEV110</div>
        <div className="home-links">
        <ul>
            <li> <Link href='/' className='links-item'>Home</Link></li>
            <li> <Link href='#about' className='links-item'>About</Link></li>
            <li> <Link href='#projects' className='links-item'>Projects</Link></li>
            <li> <Link href='#contact' className='links-item'>Contact</Link></li>
        </ul> 
        </div>

        <div className="social-links">
            <ul>
        <li>
        <Link href="https://www.linkedin.com/in/aynnfatima3003/" target="_blank" className="links-item">
          LinkedIn
        </Link>
      </li>
      <li>
        <Link href="https://github.com/AynnFatima999" target="_blank" className="links-item">
          GitHub
        </Link>
      </li>
      <li>
        <Link href="https://www.npmjs.com/~alinafatima_09" target="_blank" className="links-item">
          Npm
        </Link>
      </li>
      <li>
        <Link href="#" target="_blank" className="links-item">
          WhatsApp
        </Link>
      </li>
    </ul>
  </div>
</div>
    <div className="rights">Copyrights@AynnFatima2024</div>

    </section>
  )
}

export default Footer;
