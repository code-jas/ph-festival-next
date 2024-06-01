import React from 'react';
import { heroData } from './heroData';
import Image from 'next/image';
import Link from 'next/link';

const HeroFeature = () => {
    const { header, features } = heroData;

    return (
        <section className="home-section" id="home">
            <div className="sub-home">
                <div className="header2">
                    <h1>{header.title}</h1>
                    <p>{header.description}</p>
                    <Link href={header.buttonLink} className="fest-btn">
                        <button className="home-fest-btn">{header.buttonText}</button>
                    </Link>
                </div>
                <div className="card-image-home">
                    <Image src={header.imageSrc} alt={header.imageAlt} quality={100} width={700} height={800} style={{ objectFit: 'cover' }} />
                </div>
            </div>

            <div className="home-features">
                {features.map((feature, index) => (
                    <div key={index} className="home-visual">
                        <Image className="visual-image-card" src={feature.imageSrc} alt={feature.title} width={300} height={200} />
                        <h2>{feature.title}</h2>
                        <h3>{feature.description}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HeroFeature;
