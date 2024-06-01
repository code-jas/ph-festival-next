'use client';

import { nextCard, prevCard } from '@/app/store/cradSlide';
import { AppDispatch, RootState } from '@/app/store/store';
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cardData } from './cardData';
import gsap from 'gsap';
import useIntersectionObserver from '@/app/hooks/useIntersectionObserver';

const CarouselCard: React.FC = () => {
    const currentCard = useSelector((state: RootState) => state.card.currentCard);
    const dispatch = useDispatch<AppDispatch>();


    const cardsContainerRef = useRef<HTMLDivElement>(null);
    const appBgContainerRef = useRef<HTMLDivElement>(null);

    const handleNext = () => {
        dispatch(nextCard());
    };

    const handlePrev = () => {
        dispatch(prevCard());
    };

    const { observe } = useIntersectionObserver((entries) => { 
        entries.forEach((entry) =>  {
            const video = entry.target as HTMLVideoElement;
            if(entry.isIntersecting){ 
                video.play();
            } else { 
                video.pause();
            }
        })
    },{
        root: null, rootMargin: '0px', thresholds: [1.0],
        disconnect: function (): void { throw new Error('Function not implemented.')},
        observe: function (target: Element): void { throw new Error('Function not implemented.')},
        takeRecords: function (): IntersectionObserverEntry[] { throw new Error('Function not implemented.')},
        unobserve: function (target: Element): void {throw new Error('Function not implemented.')}
    })

    useEffect(() => {
        const currentVideo = document.getElementById('vid-scroll-control') as HTMLVideoElement;
        if (currentVideo) {
          observe(currentVideo);
        }
      }, [currentCard, observe]);

    return (
        <div className="cardList">
        <button className="cardList__btn btn btn--left" onClick={handlePrev}>
            <div className="icon">
            <svg>
                <use xlinkHref="#arrow-left" />
            </svg>
            </div>
        </button>

        <div className="cards__wrapper">
            {cardData.map((card, index) => (
            <div
                key={index}
                className={`card ${
                currentCard === index
                    ? 'current--card'
                    : currentCard === (index + 1) % cardData.length
                    ? 'next--card'
                    : 'previous--card'
                }`}
            >
                <div className="vid card__image">
                <video
                    id='vid-scroll-control'
                    className={
                    currentCard === index
                        ? 'cur-video'
                        : currentCard === (index + 1) % cardData.length
                        ? 'next-video'
                        : 'prev-video'
                    }
                    autoPlay={currentCard === index}
                    loop
                    poster={card.poster}
                >
                    <source src={card.videoUrl} type="video/mp4" />
                    Your browser doesn&apos;t support HTML5 video tag.
                </video>
                </div>
            </div>
            ))}
        </div>

        <button className="cardList__btn btn btn--right" onClick={handleNext}>
            <div className="icon">
            <svg>
                <use xlinkHref="#arrow-right" />
            </svg>
            </div>
        </button>
        </div>
    );
};

export default CarouselCard;
