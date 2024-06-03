'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import imagesLoaded from 'imagesloaded';
import { useDispatch, useSelector } from 'react-redux';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

// components
import CarouselCard from './CarouselCard';
import CarouselCardInfo from './CarouselCardInfo';
// css
import '@/assets/styles/image-slider.css';
import '@/assets/styles/home.css';
// data
import { cardData } from './carouselData';
// hooks
import { AppDispatch, RootState } from '@/app/store/store';
import { nextCard, prevCard } from '@/app/store/cradSlide';
import useIntersectionObserver from '@/app/hooks/useIntersectionObserver';
// utils
import { resetClasses, swapInfosClass, swapCardsClass } from './carouselUtils';

const CarouselFeature: React.FC = () => {
    const [isMuted, setIsMuted] = useState(true);
    const currentCard = useSelector((state: RootState) => state.card.currentCard);
    const dispatch = useDispatch<AppDispatch>();

    const refs = {
        cardsContainer: useRef<HTMLDivElement>(null),
        cardInfosContainer: useRef<HTMLDivElement>(null),
        appBgContainer: useRef<HTMLDivElement>(null),
        prevButton: useRef<HTMLButtonElement>(null),
        nextButton: useRef<HTMLButtonElement>(null),
    };

    const handleNext = () => {
        dispatch(nextCard());
        swapCards('right');
    };

    const handlePrev = () => {
        dispatch(prevCard());
        swapCards('left');
    };

    /**
     * Returns the CSS class for a card based on its index and the current card index.
     * @param target - The target class name.
     * @param index - The index of the card.
     * @returns The CSS class for the card.
     */
    const getCardClass = useCallback(
        (target: string, index: number) => {
            if (index === currentCard) return `current--${target}`;
            if (index === (currentCard + 1) % cardData.length) return `next--${target}`;
            if (index === (currentCard - 1 + cardData.length) % cardData.length) return `previous--${target}`;
            return '';
        },
        [currentCard],
    );

    /**
     * Observes the intersection of elements and performs actions based on the intersection.
     *
     * @param {IntersectionObserverEntry[]} entries - The array of intersection observer entries.
     */
    const { observe } = useIntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const video = entry.target as HTMLVideoElement;
                if (entry.isIntersecting && video.id === 'vid-scroll-control') {
                    video.muted = isMuted;
                    video.play().catch((error) => console.log('Video play failed: ', error));
                } else {
                    video.pause();
                }
            });
        },
        { root: null, rootMargin: '0px', threshold: 0.5 },
    );

    useEffect(() => {
        const videos = refs.cardsContainer.current?.querySelectorAll('video');
        videos?.forEach((video: HTMLVideoElement) => observe(video));
    }, [observe, refs.cardsContainer]);

    const handleUserInteraction = () => setIsMuted(!isMuted);

    useEffect(() => {
        /*  Waits for all images on the page to load before executing the `init` function. */
        const waitForImages = () => {
            const images = [...document.querySelectorAll('img')];
            const totalImages = images.length;
            let loadedImages = 0;
            gsap.set('.cards__wrapper .card', { '--card-translateY-offset': '100vh' });
            gsap.set('.info__wrapper .current--info .text', { translateY: '40px', opacity: 0 });
            gsap.set(['.btn--left', '.btn--right'], { pointerEvents: 'none', opacity: 0 });

            images.forEach((image) => {
                imagesLoaded(image, (instance: any) => {
                    if (instance.isComplete) {
                        loadedImages++;
                        if (totalImages === loadedImages) {
                            gsap.timeline().call(init);
                        }
                    }
                });
            });
        };

        /* Initializes the carousel animation. */
        const init = () => {
            console.log('init');
            const tl = gsap.timeline();
            const currentCard = refs.cardsContainer.current?.children;
            const currentInfo = refs.cardInfosContainer.current?.querySelectorAll('.text');
            if (!currentCard || !currentInfo) return;

            tl.to(currentCard, {
                delay: 0.15,
                duration: 0.5,
                stagger: { ease: 'power4.inOut', from: 1, amount: 0.1 },
                '--card-translateY-offset': '0%',
            })
                .to('.info__wrapper .current--info .text', {
                    delay: 0.5,
                    duration: 0.4,
                    stagger: 0.1,
                    opacity: 1,
                    translateY: 0,
                })
                .to(
                    [refs.prevButton.current, refs.nextButton.current],
                    {
                        duration: 0.4,
                        opacity: 1,
                        pointerEvents: 'all',
                    },
                    '-=0.4',
                );
        };
        waitForImages();
    }, [refs.cardInfosContainer, refs.cardsContainer, refs.nextButton, refs.prevButton]);

    /**
     * Resets the transforms of a card and its current info element.
     * @param {Event} e - The event object.
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const resetCardTransforms = (e: Event) => {
        const card = e.currentTarget as HTMLElement;
        const currentInfoEl = refs.cardInfosContainer.current?.querySelector('.current--info') as HTMLElement;
        gsap.set(card, { '--current-card-rotation-offset': 0 });
        gsap.set(currentInfoEl, { rotateY: 0 });
    };

    const initCardEvents = useCallback(() => {
        const currentCardEl = refs.cardsContainer.current?.querySelector('.current--card');
        currentCardEl?.addEventListener('pointerout', resetCardTransforms);
    }, [refs.cardsContainer, resetCardTransforms]);

    useEffect(() => initCardEvents(), [currentCard, initCardEvents]);

    /**
     * Handles the change of information in the carousel.
     * @param {string} direction - The direction of the change ('left' or 'right').
     */
    const changeInfo = useCallback(
        (direction: string) => {
            const currentInfoEl = refs.cardInfosContainer.current?.querySelector('.current--info') as HTMLElement;
            const previousInfoEl = refs.cardInfosContainer.current?.querySelector('.previous--info') as HTMLElement;
            const nextInfoEl = refs.cardInfosContainer.current?.querySelector('.next--info') as HTMLElement;

            if (!currentInfoEl || !previousInfoEl || !nextInfoEl) return;

            gsap.timeline()
                .to([refs.prevButton.current, refs.nextButton.current], {
                    duration: 0.2,
                    opacity: 0.5,
                    pointerEvents: 'none',
                })
                .to(currentInfoEl.querySelectorAll('.text'), {
                    duration: 0.4,
                    stagger: 0.1,
                    translateY: '-120px',
                    opacity: 0,
                })
                .call(() => swapInfosClass(direction, currentInfoEl, previousInfoEl, nextInfoEl))
                .call(() => initCardEvents())
                .fromTo(direction === 'right' ? nextInfoEl.querySelectorAll('.text') : previousInfoEl.querySelectorAll('.text'), { opacity: 0, translateY: '40px' }, { duration: 0.4, stagger: 0.1, translateY: '0px', opacity: 1 })
                .to([refs.prevButton.current, refs.nextButton.current], {
                    duration: 0.2,
                    opacity: 1,
                    pointerEvents: 'all',
                });
        },
        [initCardEvents, refs.cardInfosContainer, refs.nextButton, refs.prevButton],
    );

    /**
     * Swaps the cards in the carousel based on the given direction.
     *
     * @param direction - The direction in which to swap the cards.
     */
    const swapCards = useCallback(
        (direction: string) => {
            const currentCardEl = refs.cardsContainer.current?.querySelector('.current--card') as HTMLElement;
            const previousCardEl = refs.cardsContainer.current?.querySelector('.previous--card') as HTMLElement;
            const nextCardEl = refs.cardsContainer.current?.querySelector('.next--card') as HTMLElement;

            const currentBgImageEl = refs.appBgContainer.current?.querySelector('.current--image') as HTMLElement;
            const previousBgImageEl = refs.appBgContainer.current?.querySelector('.previous--image') as HTMLElement;
            const nextBgImageEl = refs.appBgContainer.current?.querySelector('.next--image') as HTMLElement;

            // changeInfo(direction);
            swapCardsClass(direction, currentCardEl, previousCardEl, nextCardEl, currentBgImageEl, previousBgImageEl, nextBgImageEl);
        },
        [refs.appBgContainer, refs.cardsContainer],
    );

    return (
        <section id="landing" className="land-banner" onClick={handleUserInteraction}>
            <div className="app">
                <div className="landing--header">
                    <h1>Be Part of our Culture</h1>
                    <p className="landing--p">Festivals in the Philippines you must experience and find the greatness of its culture. Share our similarities, celebrate our differences.</p>
                </div>
                <div className="cardList">
                    <button ref={refs.prevButton} className="cardList__btn btn btn--left" onClick={handlePrev}>
                        <FaAngleLeft className="icon" color="white" />
                    </button>
                    <div className="cards__wrapper" ref={refs.cardsContainer}>
                        {cardData.map((card, index) => (
                            <CarouselCard key={index} videoURL={card.videoUrl} posterSrc={card.poster} className={getCardClass('card', index)} />
                        ))}
                    </div>
                    <button ref={refs.nextButton} className="cardList__btn btn btn--right" onClick={handleNext}>
                        <FaAngleRight className="icon" color="white" />
                    </button>
                </div>
                <div className="infoList">
                    <div className="info__wrapper" ref={refs.cardInfosContainer}>
                        {cardData.map((card, index) => (
                            <CarouselCardInfo key={index} name={card.title} location={card.location} className={getCardClass('info', index)} />
                        ))}
                    </div>
                </div>
                <div className="app__bg" ref={refs.appBgContainer}>
                    {cardData.map((card, index) => (
                        <div key={index} className={`app__bg__image ${getCardClass('image', index)}`}>
                            <Image src={card.poster} alt={card.title} quality={100} fill sizes="100vw" style={{ objectFit: 'cover' }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CarouselFeature;
