'use client';

import React, { useState, useEffect } from 'react';
import '@/assets/styles/navbar.css';
import Image from 'next/image';

const Navbar:React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    // Toggle body overflow when menu is opened/closed
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };


  return (
    <header>
      <nav className="navbar">
        <a href="index.html" className="nav-branding">
          <Image
            className="img-branding"
            src="/images/logo/Festival Ph - Logo 96x96.png"
            alt="Festival Ph Logo"
            width={39}  // Specify the width of the image
            height={30} // Specify the height of the image
          />
         <Image
            className="img-branding"
            src="https://fontmeme.com/permalink/220111/85ccb88541790fd7b5db3b2d38a6081d.png"
            alt="logo"
            width={158.48}  
            height={30} 
          />
        </a>
       <div className={`nav-menu ${isMenuOpen ? 'navbar-active' : ''}`}>
          <ul className="sub-nav-menu">
            <li className="nav-item"><a href="#home" accessKey="1" tabIndex={1} className="nav-link" onClick={handleNavLinkClick}>Home</a></li>
            <li className="nav-item"><a href="Festival-Gallery.php" accessKey="2" tabIndex={2} className="nav-link" onClick={handleNavLinkClick}>Festival</a></li>
            <li className="nav-item"><a href="aboutus.html" accessKey="3" tabIndex={3} className="nav-link" onClick={handleNavLinkClick}>About Us</a></li>
          </ul>
        </div>
        <div className={`hamburger ${isMenuOpen ? 'navbar-active' : ''}`} onClick={handleHamburgerClick}>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
