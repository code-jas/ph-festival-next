import React from 'react';

interface CarouselCardProps {
  videoSrc: string;
  posterSrc: string;
  className: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ videoSrc, posterSrc, className }) => {
  return (
    <div className={`card ${className}`}>
      <div className="vid card__image">
        <video className={className} id={className === 'current--card' ? 'vid-scroll-control' : ''} autoPlay loop poster={posterSrc}>
          <source src={videoSrc} type="video/mp4" />
          Your browser doesn&apos;t support HTML5 video tag.
        </video>
      </div>
    </div>
  );
};

export default CarouselCard;
