import React from 'react';
import Image from 'next/image';
import '@/assets/styles/footer.css';

const Footer: React.FC = () => {
   return (
      <div className="footer">
         <div className="inner-footer">
            {/* For quick links */}
            <div className="footer-items">
               <a href="index.html" className="footer--logo">
                  <Image
                     src="/images/logo/Festival Ph - Logo 96x96.png"
                     alt="Festival Ph Logo"
                     width={96}
                     height={96}
                  />
               </a>
               <Image
                  className="footer-img-branding"
                  src="https://fontmeme.com/permalink/220111/85ccb88541790fd7b5db3b2d38a6081d.png"
                  alt="logo"
                  width={200} // Adjust width according to your requirement
                  height={50} // Adjust height according to your requirement
               />
               <p>Make it a memorable Festival Experience in the Philippines </p>

               {/* For the underline */}
               <ul className="footer-link">
                  <li>
                     <a href="#home">Home</a>
                  </li>
                  <span className="footer-bar"></span>
                  <li>
                     <a href="festival.html">Festival</a>
                  </li>
                  <span className="footer-bar"></span>
                  <li>
                     <a href="aboutus.html">About Us</a>
                  </li>
               </ul>
            </div>

            {/* For social links */}
            <div className="social-media">
               <a href="#">
                  <i className="fab fa-instagram"></i>
               </a>
               <a href="#">
                  <i className="fab fa-facebook"></i>
               </a>
               <a href="#">
                  <i className="fab fa-google-plus-square"></i>
               </a>
            </div>
         </div>
      </div>
   );
};

export default Footer;
