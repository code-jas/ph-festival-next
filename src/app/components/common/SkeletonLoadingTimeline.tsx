import React from 'react';
import '@/assets/styles/loading.css';

interface SkeletonLoadingTimelineProps {
   size: number;
}

const SkeletonLoadingTimeline: React.FC<SkeletonLoadingTimelineProps> = ({ size }) => {
   return (
      <div className="main-tl">
         <div className="fest-tl-cont">
            <ul id="fest-tl-lms">
               {Array.from({ length: size }).map((_, index) => (
                  <li className="fest-tl-list" key={index}>
                     <div className="skeleton-loader mb-2"></div>
                     <div className="skeleton-loader mb-2"></div>
                     <div className="skeleton-loader mb-2"></div>
                     <div className="skeleton-loader mb-2"></div>
                     <div className="skeleton-loader w-24"></div>

                     <span className="fest-tl-date  title-prim-skeleton"></span>
                     <span className="fest-tl-circle"></span>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default SkeletonLoadingTimeline;
