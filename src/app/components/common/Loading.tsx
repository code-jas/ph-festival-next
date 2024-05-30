'use client';

import React, { useEffect } from 'react';
import '@/assets/styles/loading.css';


const Loading:React.FC = () => {
  useEffect(() => {
    const handleLoad = () => {
      const loadingWrapper: HTMLElement | null = document.querySelector(".loading__wrapper");
      if (loadingWrapper) {
        loadingWrapper.style.display = 'none';
      }
      const compContEl: HTMLElement | null = document.querySelector('.comp-cont-el');
      if (compContEl) {
        compContEl.style.display = 'block';
      }
    };
    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="loading__wrapper">
      <div className="box-wrap">
        <div className="box one"></div>
        <div className="box two"></div>
        <div className="box three"></div>
        <div className="box four"></div>
        <div className="box five"></div>
        <div className="boxSsix"></div>
      </div>
    </div>
  );
};

export default Loading;
