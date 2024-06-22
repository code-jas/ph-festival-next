'use client';
import React from 'react';
import { FestivalDetailsType } from '@/app/typings/festival-detail-type';
import '@/assets/styles/view-festival-details.css';
import FestivalDetailsHeader from './FestivalDetailsHeader';
import BackButton from './BackButton';
import FestivalDetailsContent from './FestivalDetailsContent';
interface FestivalDetailsClientProps {
   festival: FestivalDetailsType;
}

const FestivalDetailsClient: React.FC<FestivalDetailsClientProps> = ({ festival }) => {
   const paragraphs = [
      festival.paragraph1,
      festival.paragraph2,
      festival.paragraph3,
      festival.paragraph4,
   ];
   const activities = [
      festival.imgItem1,
      festival.imgItem2,
      festival.imgItem3,
      festival.imgItem4,
   ].filter(Boolean);
   return (
      <div className="fest-container">
         <BackButton />
         {/* Title */}
         <FestivalDetailsHeader
            islandGroup={festival.islandGroup}
            img={festival.img}
            title={festival.title}
            date={festival.date}
            location={festival.location}
         />

         {/* content */}
         <FestivalDetailsContent
            paragraphs={paragraphs}
            img={festival.img}
            title={festival.title}
            activities={activities}
            ytPath={festival.ytPath}
            href={festival.ref}
         />
      </div>
   );
};

export default FestivalDetailsClient;
