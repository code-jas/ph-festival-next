'use client';

import React from 'react';
import '@/assets/styles/loading.css';

const Loading: React.FC = () => {
   return (
      <div>
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
         <div className="loading loading03">
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
         </div>
      </div>
   );
};

export default Loading;
