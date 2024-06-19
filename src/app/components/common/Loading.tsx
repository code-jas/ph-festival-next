'use client';

import React, { useEffect } from 'react';
import '@/assets/styles/loading.css';

interface LoadingProps {
   isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
   useEffect(() => {
      const loadingWrapper: HTMLElement | null = document.querySelector('.loading__wrapper');
      if (loadingWrapper) {
         if (!isLoading) {
            loadingWrapper.classList.add('fade-out');
         }
      }
   }, [isLoading]);

   return (
      <div className="loading__wrapper">
         <div className="box-wrap">
            <div className="box one"></div>
            <div className="box two"></div>
            <div className="box three"></div>
            <div className="box four"></div>
            <div className="box five"></div>
            <div className="box six"></div>
         </div>
      </div>
   );
};

export default Loading;
