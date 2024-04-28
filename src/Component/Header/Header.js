import React, { useState, useEffect } from 'react';
import './Header.css';
import { myFunction, NavToggle } from './HeaderJS.js';
import Logo from "../../Images/Logo.png";

export default function Header() {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >  100) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header>
      <i class="bi-filter-left" onClick={NavToggle}></i>
      <i class="bi-x-circle" onClick={NavToggle}></i>
      <img src={Logo} alt='' className='Logo' />
      <nav className={isHeaderFixed ? 'TopFixed' : ''}>
        <a href="/" className='Active' onClick={myFunction}>Home</a>
        <a href="/" onClick={myFunction}>Our Services</a>
        <a href="/" onClick={myFunction}>About us</a>
        <a href="/" onClick={myFunction}>Contact us</a>
        <a href="/" onClick={myFunction}>Our centres</a>
        <div className="animation start-home"></div>
      </nav>
    </header>
  )
}
