import React from 'react';

interface CarouselCardProps {
   videoURL: string;
   posterSrc: string;
   className: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ videoURL, posterSrc, className }) => {
   return (
      <div className={`card ${className}`}>
         <div className="vid card__image">
            <video
               className={className}
               id={className === 'current--card' ? 'vid-scroll-control' : ''}
               loop
               poster={posterSrc}
            >
               <source src={videoURL} type="video/mp4" />
               Your browser doesn&apos;t support HTML5 video tags
            </video>
         </div>
      </div>
   );
};

export default CarouselCard;
