// components/FestivalTimeline.tsx

import React, { useEffect, useState } from 'react';
import { FestivalDetailsType } from '@/app/typings/festival-detail-type';
import FestivalTimelineItem from './FestivalTimelineItem';
import '@/assets/styles/festival-timeline.css';
import { sortByMonth } from './festivalUtils';

interface FestivalClientProps {
   festivals: FestivalDetailsType[];
}

const FestivalTimeline: React.FC<FestivalClientProps> = ({ festivals }) => {
   const [sortedFestivals, setSortedFestivals] = useState<FestivalDetailsType[]>([]);

   useEffect(() => {
      const sorted = sortByMonth([...festivals]);
      setSortedFestivals(sorted);
   }, [festivals]);

   return (
      <>
         <div className="main-tl">
            <div className="fest-tl-cont">
               <ul id="fest-tl-lms">
                  {sortedFestivals.map((item, index) => (
                     <FestivalTimelineItem key={index} item={item} />
                  ))}
               </ul>
            </div>
         </div>
      </>
   );
};

export default FestivalTimeline;
