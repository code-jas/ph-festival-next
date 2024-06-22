// components/FestivalTimelineItem.tsx

import React from 'react';
import Link from 'next/link';
import { FestivalDetailsType } from '@/app/typings/festival-detail-type';
import { truncateWords } from './festivalUtils';

interface FestivalTimelineItemProps {
   item: FestivalDetailsType;
}

const FestivalTimelineItem: React.FC<FestivalTimelineItemProps> = ({ item }) => {
   return (
      <li className="fest-tl-list">
         <h3 className="fest-tl-hd1">{item.title}</h3>
         <p className="fest-tl-hd2"> </p>
         <p className="font-light">{truncateWords(item.paragraph1)}</p>
         <Link className="fest-tl-link" href={`/festival/${item.id}`}>
            Read more
         </Link>
         <span className="fest-tl-date">{item.date}</span>
         <span className="fest-tl-circle"></span>
      </li>
   );
};

export default FestivalTimelineItem;
