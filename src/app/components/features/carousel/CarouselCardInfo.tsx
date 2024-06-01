'use client';

import { RootState } from '@/app/store/store';
import React from 'react';
import { useSelector } from 'react-redux';
import { cardData } from './cardData';

const CarouselCardInfo: React.FC = () => {
  const currentCard = useSelector((state: RootState) => state.card.currentCard);

  return (
    <div className="infoList">
      <div className="info__wrapper">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`info ${
              currentCard === index
                ? 'current--info'
                : currentCard === (index + 1) % cardData.length
                ? 'next--info'
                : 'previous--info'
            }`}
          >
            <h1 className="text name">{card.title}</h1>
            <h4 className="text location">{card.location}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselCardInfo;
