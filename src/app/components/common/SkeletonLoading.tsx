'use client';

import React from 'react';
import '@/assets/styles/loading.css';

interface LoadingSkeletonCardProps {
   size?: number;
}

const LoadingSkeletonCard: React.FC<LoadingSkeletonCardProps> = ({ size = 1 }) => {
   return (
      <div className="fest-gallery-main">
         {Array.from({ length: size }).map((_, index) => (
            <div key={index} className="card-skeleton">
               <div className="cover-image-skeleton"></div>
               <div className="skeleton-loader"></div>
            </div>
         ))}
      </div>
   );
};

export default LoadingSkeletonCard;
