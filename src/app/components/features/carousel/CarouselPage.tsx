'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import CarouselCard from './CarouselCard';
import CarouselCardInfo from './CarouselCardInfo';
import { cardData } from './cardData';
import Image from 'next/image';
import useVideoScroll from '@/app/hooks/useVideoScroll';
import gsap from 'gsap';
import imagesLoaded from 'imagesloaded';
import '@/assets/styles/home.css';
import '@/assets/styles/image-slider.css';

const CarouselPage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsContainerRef = useRef<HTMLDivElement>(null);
    const appBgContainerRef = useRef<HTMLDivElement>(null);
    const cardInfosContainerRef = useRef<HTMLDivElement>(null);
    const prevButtonRef = useRef<HTMLButtonElement>(null);

    const nextButtonRef = useRef<HTMLButtonElement>(null);

    useVideoScroll();

    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
        swapCards('right');
    }, [currentIndex]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
        swapCards('left');
    }, [currentIndex]);

    const getCardClass = useCallback(
        (index: number) => {
            if (index === currentIndex) return 'current--card';
            if (index === (currentIndex + 1) % cardData.length) return 'next--card';
            if (index === (currentIndex - 1 + cardData.length) % cardData.length) return 'previous--card';
            return '';
        },
        [currentIndex],
    );

    const swapCards = (direction: string) => {
        const currentCardEl = cardsContainerRef.current?.querySelector('.current--card') as HTMLElement;
        const previousCardEl = cardsContainerRef.current?.querySelector('.previous--card') as HTMLElement;
        const nextCardEl = cardsContainerRef.current?.querySelector('.next--card') as HTMLElement;

        const currentBgImageEl = appBgContainerRef.current?.querySelector('.current--image') as HTMLElement;
        const previousBgImageEl = appBgContainerRef.current?.querySelector('.previous--image') as HTMLElement;
        const nextBgImageEl = appBgContainerRef.current?.querySelector('.next--image') as HTMLElement;

        changeInfo(direction);
        swapCardsClass();

        function swapCardsClass() {
            currentCardEl?.classList.remove('current--card');
            previousCardEl?.classList.remove('previous--card');
            nextCardEl?.classList.remove('next--card');

            currentBgImageEl?.classList.remove('current--image');
            previousBgImageEl?.classList.remove('previous--image');
            nextBgImageEl?.classList.remove('next--image');

            const curVideoEl = document.querySelector('.cur-video') as HTMLVideoElement;
            const nextVideoEl = document.querySelector('.next-video') as HTMLVideoElement;
            const prevVideoEl = document.querySelector('.prev-video') as HTMLVideoElement;

            if (currentCardEl) currentCardEl.style.zIndex = '20';
            if (currentBgImageEl) currentBgImageEl.style.zIndex = '-2';

            if (direction === 'right') {
                if (previousCardEl) previousCardEl.style.zIndex = '20';
                if (nextCardEl) nextCardEl.style.zIndex = '30';
                if (nextBgImageEl) nextBgImageEl.style.zIndex = '-1';

                currentCardEl?.classList.add('previous--card');
                previousCardEl?.classList.add('next--card');
                nextCardEl?.classList.add('current--card');

                currentBgImageEl?.classList.add('previous--image');
                previousBgImageEl?.classList.add('next--image');
                nextBgImageEl?.classList.add('current--image');

                playCurrentVid(1);
            } else if (direction === 'left') {
                if (previousCardEl) previousCardEl.style.zIndex = '30';
                if (nextCardEl) nextCardEl.style.zIndex = '20';
                if (previousBgImageEl) previousBgImageEl.style.zIndex = '-1';

                currentCardEl?.classList.add('next--card');
                previousCardEl?.classList.add('current--card');
                nextCardEl?.classList.add('previous--card');

                currentBgImageEl?.classList.add('next--image');
                previousBgImageEl?.classList.add('current--image');
                nextBgImageEl?.classList.add('previous--image');

                playCurrentVid(-1);
            }

            function playCurrentVid(val: number) {
                let vidControl = currentIndex + val;

                if (vidControl === 4) vidControl = 1;
                if (vidControl === 0) vidControl = 3;

                if (vidControl === 2) {
                    curVideoEl.pause();
                    prevVideoEl.pause();
                    nextVideoEl.play();

                    curVideoEl.removeAttribute('id');
                    prevVideoEl.removeAttribute('id');
                    nextVideoEl.setAttribute('id', 'vid-scroll-control');
                } else if (vidControl === 3) {
                    curVideoEl.pause();
                    prevVideoEl.play();
                    nextVideoEl.pause();

                    curVideoEl.removeAttribute('id');
                    prevVideoEl.setAttribute('id', 'vid-scroll-control');
                    nextVideoEl.removeAttribute('id');
                } else if (vidControl === 1) {
                    curVideoEl.play();
                    prevVideoEl.pause();
                    nextVideoEl.pause();

                    curVideoEl.setAttribute('id', 'vid-scroll-control');
                    prevVideoEl.removeAttribute('id');
                    nextVideoEl.removeAttribute('id');
                }

                observer.observe(document.getElementById('vid-scroll-control')!);
            }
        }
    };
    // Ensure that `observer` is defined
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            console.log(mutation);
        });
    });

    const changeInfo = (direction: string) => {
        const currentInfoEl = cardInfosContainerRef.current?.querySelector('.current--info');
        const previousInfoEl = cardInfosContainerRef.current?.querySelector('.previous--info');
        const nextInfoEl = cardInfosContainerRef.current?.querySelector('.next--info');

        gsap.timeline()
            .to([prevButtonRef.current, nextButtonRef.current], {
                duration: 0.2,
                opacity: 0.5,
                pointerEvents: 'none',
            })
            .to(
                currentInfoEl?.querySelectorAll('.text') || [],
                {
                    duration: 0.4,
                    stagger: 0.1,
                    translateY: '-120px',
                    opacity: 0,
                },
                '-=',
            )
            .call(() => {
                swapInfosClass(direction);
            })
            .call(() => initCardEvents())
            .fromTo(
                direction === 'right' ? nextInfoEl?.querySelectorAll('.text') ?? [] : previousInfoEl?.querySelectorAll('.text') ?? [],
                {
                    opacity: 0,
                    translateY: '40px',
                },
                {
                    duration: 0.4,
                    stagger: 0.1,
                    translateY: '0px',
                    opacity: 1,
                },
            )
            .to([prevButtonRef.current, nextButtonRef.current], {
                duration: 0.2,
                opacity: 1,
                pointerEvents: 'all',
            });

        function swapInfosClass(direction: string) {
            currentInfoEl?.classList.remove('current--info');
            previousInfoEl?.classList.remove('previous--info');
            nextInfoEl?.classList.remove('next--info');

            if (direction === 'right') {
                currentInfoEl?.classList.add('previous--info');
                nextInfoEl?.classList.add('current--info');
                previousInfoEl?.classList.add('next--info');
            } else if (direction === 'left') {
                currentInfoEl?.classList.add('next--info');
                nextInfoEl?.classList.add('previous--info');
                previousInfoEl?.classList.add('current--info');
            }
        }
    };

    const initCardEvents = useCallback(() => {
        const currentCardEl = cardsContainerRef.current?.querySelector('.current--card');

        if (currentCardEl) {
            currentCardEl.addEventListener('pointerout', resetCardTransforms);
        }
    }, []);

    const resetCardTransforms = (e: Event) => {
        const card = e.currentTarget as HTMLElement;
        const currentInfoEl = cardInfosContainerRef.current?.querySelector('.current--info');
        gsap.set(card, {
            '--current-card-rotation-offset': 0,
        });
        gsap.set(currentInfoEl!, {
            rotateY: 0,
        });
    };

    const waitForImages = useCallback(() => {
        const images: HTMLImageElement[] = Array.from(document.querySelectorAll('img'));
        const totalImages = images.length;
        let loadedImages = 0;
        const loaderEl = document.querySelector('.loader span') as HTMLElement;
    
        gsap.set(cardsContainerRef.current!.children, {
          '--card-translateY-offset': '100vh',
        });
        gsap.set(cardInfosContainerRef.current!.querySelector('.current--info')!.querySelectorAll('.text'), {
          translateY: '40px',
          opacity: 0,
        });
        gsap.set([prevButtonRef.current, nextButtonRef.current], {
          pointerEvents: 'none',
          opacity: '0',
        });
    
        images.forEach((image) => {
          imagesLoaded(image, (instance: any) => {
            if (instance.isComplete) {
              loadedImages++;
              const loadProgress = loadedImages / totalImages;
    
              gsap.to(loaderEl, {
                duration: 1,
                scaleX: loadProgress,
                backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%)`,
              });
    
              if (totalImages === loadedImages) {
                gsap.timeline()
                  .to('.loading__wrapper', {
                    duration: 0.8,
                    opacity: 0,
                    pointerEvents: 'none',
                  })
                  .call(() => init());
              }
            }
          });
        });
      }, []);

      const init = useCallback(() => {
        const tl = gsap.timeline();
    
        tl.to(cardsContainerRef.current!.children, {
          delay: 0.15,
          duration: 0.5,
          stagger: {
            ease: 'power4.inOut',
            from: 'end',
            amount: 0.1,
          },
          '--card-translateY-offset': '0%',
        })
          .to(cardInfosContainerRef.current!.querySelector('.current--info')!.querySelectorAll('.text'), {
            delay: 0.5,
            duration: 0.4,
            stagger: 0.1,
            opacity: 1,
            translateY: 0,
          })
          .to(
            [prevButtonRef.current, nextButtonRef.current],
            {
              duration: 0.4,
              opacity: 1,
              pointerEvents: 'all',
            },
            '-=0.4',
          );
      }, []);

      useEffect(() => {
        waitForImages();
      }, [waitForImages]);

    return (
    <section id="landing" className="land-banner">
      <div className="app">
        <div className="landing--header">
          <h1>Be Part of our Culture</h1>
          <p className="landing--p">Festivals in the Philippines you must experience and find the greatness of its culture. Share our similarities, celebrate our differences.</p>
        </div>
        <div className="cardList">
          <button className="cardList__btn btn btn--left" ref={prevButtonRef} onClick={handlePrev}>
            <div className="icon">
              <svg>
                <use xlinkHref="#arrow-left"></use>
              </svg>
            </div>
          </button>

          <div className="cards__wrapper" ref={cardsContainerRef}>
            {cardData.map((card, index) => (
              <CarouselCard key={index} videoSrc={card.videoUrl} posterSrc={card.poster} className={getCardClass(index)} />
            ))}
          </div>

          <button className="cardList__btn btn btn--right" ref={nextButtonRef} onClick={handleNext}>
            <div className="icon">
              <svg>
                <use xlinkHref="#arrow-right"></use>
              </svg>
            </div>
          </button>
        </div>
        <div className="infoList">
          <div className="info__wrapper" ref={cardInfosContainerRef}>
            {cardData.map((card, index) => (
              <CarouselCardInfo key={index} name={card.title} location={card.location} className={getCardClass(index)} />
            ))}
          </div>
        </div>
        <div className="app__bg">
          {cardData.map((card, index) => (
            <div key={index} className={`app__bg__image ${getCardClass(index)}`}>
              <Image src={card.poster} alt={card.title} quality={100} fill sizes="100vw" style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>
      <svg className="icons" style={{ display: 'none' }}>
        <symbol id="arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <polyline points="328 112 184 256 328 400" style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '48px' }} />
        </symbol>
        <symbol id="arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <polyline points="184 112 328 256 184 400" style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '48px' }} />
        </symbol>
      </svg>
    </section>
  );
};

export default CarouselPage;

// <div className="app__bg">
// <div className="app_bg__image current--image">
//     <Image
//         src="/images/dinagyang_img1.jpg"
//         alt="dinagyang_img1.jpg"
//         quality={100}
//         fill
//         sizes="100vw"
//         style={{
//             objectFit: 'cover',
//         }}
//     />
// </div>
// <div className="app__bg__image next--image">
//     <Image
//         src="/images/sinulog_img1.jpg"
//         alt="sinulog_img1.jpg"
//         quality={100}
//         fill
//         sizes="100vw"
//         style={{
//             objectFit: 'cover',
//         }}
//     />
// </div>
// <div className="app__bg__image previous--image">
//     <Image
//         src="/images/ati-atihan_img1.jpg"
//         alt="ati-atihan_img1.jpg"
//         quality={100}
//         fill
//         sizes="100vw"
//         style={{
//             objectFit: 'cover',
//         }}
//     />
// </div>
// </div>
