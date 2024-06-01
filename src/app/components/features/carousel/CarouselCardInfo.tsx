import React from 'react';

interface CarouselCardInfoProps {
  name: string;
  location: string;
  className: string;
}

const CarouselCardInfo: React.FC<CarouselCardInfoProps> = ({ name, location, className }) => {
  return (
    <div className={`info ${className}`}>
      <h1 className="text name">{name}</h1>
      <h4 className="text location">{location}</h4>
    </div>
  );
};

export default CarouselCardInfo;
