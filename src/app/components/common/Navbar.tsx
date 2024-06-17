'use client';

import React, { useState, useEffect, useRef } from 'react';
import '@/assets/styles/navbar.css';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
    const path = usePathname();
    const headerRef = useRef<HTMLElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                headerRef.current.classList.toggle('sticky', window.scrollY > 500);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    useEffect(() => {
        if (headerRef.current) {
            if (path !== '') {
                headerRef.current.classList.add('sticky');
            } else {
                headerRef.current.classList.remove('sticky');
            }
        }
        // Scroll to the top of the page on path change
        window.scrollTo(0, 0);
    }, [path]);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetPath: string) => {
        if (path === targetPath) {
            e.preventDefault();
            window.scrollTo(0, 0);
            setIsMenuOpen(false);
        } else {
            toggleMenu();
        }
    };

    const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

    return (
        <header ref={headerRef}>
            <nav className="navbar">
                <a href="index.html" className="nav-branding">
                    <Image
                        className="img-branding"
                        src="/images/logo/Festival Ph - Logo 96x96.png"
                        alt="Festival Ph Logo"
                        width={39} // Specify the width of the image
                        height={30} // Specify the height of the image
                    />
                    <Image className="img-branding" src="https://fontmeme.com/permalink/220111/85ccb88541790fd7b5db3b2d38a6081d.png" alt="logo" width={158.48} height={30} />
                </a>
                <div className={`nav-menu ${isMenuOpen ? 'navbar-active' : ''}`}>
                    <ul className="sub-nav-menu">
                        <li className="nav-item">
                            <Link href="/" className="nav-link" onClick={toggleMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/festival" className="nav-link" onClick={toggleMenu}>
                                Festival
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/aboutus" className="nav-link" onClick={(e) => handleLinkClick(e, '/aboutus')}>
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={`hamburger ${isMenuOpen ? 'navbar-active' : ''}`} onClick={toggleMenu}>
                    <span className="burger-bar"></span>
                    <span className="burger-bar"></span>
                    <span className="burger-bar"></span>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
