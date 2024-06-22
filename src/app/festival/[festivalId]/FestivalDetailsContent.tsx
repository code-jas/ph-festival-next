import React from 'react';
import Image from 'next/image';
import ImageActivites from '@/app/components/features/festival-details/ImageActivites';

interface FestivalContentProps {
   paragraphs: string[];
   img: string;
   title: string;
   activities: string[];
   ytPath: string;
   href: string;
}

const FestivalDetailsContent: React.FC<FestivalContentProps> = ({
   paragraphs,
   img,
   title,
   activities,
   ytPath,
   href,
}) => {
   return (
      <div className="fest-parag-cont">
         {paragraphs.map((paragraph, index) => (
            <React.Fragment key={index}>
               <p className="fest-parag">{paragraph}</p>
               <br />
            </React.Fragment>
         ))}
         <div className="image" style={{ position: 'relative', width: '100%' }}>
            <Image src={img} alt={title} fill sizes="100" style={{ objectFit: 'cover' }} />
         </div>
         <h3>{title} Activities</h3>
         <div className="container">
            {activities.map((activity, index) => (
               <ImageActivites key={index} imageUrl={activity} />
            ))}
         </div>
         <div className="video-wrapper">
            <iframe
               src={ytPath}
               width={560}
               height={315}
               title="Youtube video player"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
            />
         </div>
         <a className="content-fest-link-source" href={href}>
            reference
         </a>
      </div>
   );
};

export default FestivalDetailsContent;
