'use client';

import React, { useEffect, useRef } from 'react';
import CarouselCard from './CarouselCard';
import CarouselCardInfo from './CarouselCardInfo';
import Image from 'next/image';
import '@/assets/styles/image-slider.css';
import '@/assets/styles/home.css';
import gsap from 'gsap';
import imagesLoaded from 'imagesloaded';

const CarouselPage: React.FC = () => {
    useEffect(() => {
        const waitForImages = () => {
            const images = [...document.querySelectorAll('img')];
            console.log('images :>> ', images);
            const totalImages = images.length;
            let loadedImages = 0;
            const loaderEl = document.querySelector('.loader span');

            gsap.set('.cards__wrapper .card', {
                '--card-translateY-offset': '100vh',
            });
            gsap.set('.info__wrapper .current--info .text', {
                translateY: '40px',
                opacity: 0,
            });
            gsap.set(['.btn--left', '.btn--right'], {
                pointerEvents: 'none',
                opacity: 0,
            });

            images.forEach((image) => {
                imagesLoaded(image, (instance: any) => {
                    if (instance.isComplete) {
                        loadedImages++;
                        const loadProgress = loadedImages / totalImages;

                        gsap.to(loaderEl, {
                            duration: 1,
                            scaleX: loadProgress,
                            backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
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
        };

        const init = () => {
            const tl = gsap.timeline();

            tl.to('.cards__wrapper .card', {
                delay: 0.15,
                duration: 0.5,
                stagger: {
                    ease: 'power4.inOut',
                    from: 1,
                    amount: 0.1,
                },
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
                    ['.btn--left', '.btn--right'],
                    {
                        duration: 0.4,
                        opacity: 1,
                        pointerEvents: 'all',
                    },
                    '-=0.4',
                );
        };

        waitForImages();
    }, []);

    return (
        <section id="landing" className="land-banner">
            <div className="app">
                <div className="landing--header">
                    <h1>Be Part of our Culture</h1>
                    <p className="landing--p">Festivals in the Philippines you must experience and find the greatness of its culture. Share our similarities, celebrate our differences.</p>
                </div>
                <CarouselCard />
                <CarouselCardInfo />
                {/* BACKGROUND IMAGES */}
                <div className="app__bg">
                    <div className="app_bg__image current--image">
                        <Image
                            src="/images/dinagyang_img1.jpg"
                            alt="dinagyang_img1.jpg"
                            quality={100}
                            fill
                            sizes="100vw"
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                    <div className="app__bg__image next--image">
                        <Image
                            src="/images/sinulog_img1.jpg"
                            alt="sinulog_img1.jpg"
                            quality={100}
                            fill
                            sizes="100vw"
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                    <div className="app__bg__image previous--image">
                        <Image
                            src="/images/ati-atihan_img1.jpg"
                            alt="ati-atihan_img1.jpg"
                            quality={100}
                            fill
                            sizes="100vw"
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarouselPage;
