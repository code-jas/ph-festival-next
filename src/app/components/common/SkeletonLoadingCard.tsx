'use client';

import React from 'react';
import '@/assets/styles/loading.css';

interface SkeletonLoadingCardProps {
   size?: number;
}

const SkeletonLoadingCard: React.FC<SkeletonLoadingCardProps> = ({ size = 1 }) => {
   return (
      <div className="fest-gallery-main">
         {Array.from({ length: size }).map((_, index) => (
            <div key={index} className="card-skeleton">
               <div className="cover-image-skeleton"></div>
               <div className="skeleton-loader h-4 w-52"></div>
            </div>
         ))}
      </div>
   );
};

export default SkeletonLoadingCard;
