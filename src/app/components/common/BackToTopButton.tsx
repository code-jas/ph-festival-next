import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa6';
import '@/assets/styles/backtotop.css';

const BackToTopButton: React.FC = () => {
   const [showButton, setShowButton] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.pageYOffset > 300) {
            setShowButton(true);
         } else {
            setShowButton(false);
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   const smoothScrollBackToTop = () => {
      const targetPosition = 0;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 750;
      let start: number | null = null;

      const step = (timestamp: number | null) => {
         if (!start) start = timestamp;
         const progress = (timestamp ?? 0) - (start ?? 0);
         window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
         if (progress < duration) window.requestAnimationFrame(step);
      };

      window.requestAnimationFrame(step);
   };

   const easeInOutCubic = (t: number | null, b: number, c: number, d: number) => {
      if (t !== null) {
         t /= d / 2;
         if (t < 1) return (c / 2) * t * t * t + b;
         t -= 2;
         return (c / 2) * (t * t * t + 2) + b;
      }
      return b;
   };

   return (
      <button
         id="back-to-top-btn"
         className={showButton ? 'btnEntrance' : 'btnExit'}
         onClick={smoothScrollBackToTop}
         //  style={{ display: showButton ? 'flex' : 'none' }}
      >
         <FaAngleUp />
      </button>
   );
};

export default BackToTopButton;
