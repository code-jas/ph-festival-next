'use client';
import React from 'react';
import { FestivalDetailsType } from '@/app/typings/festival-detail-type';
import { FaAngleLeft, FaMapPin } from 'react-icons/fa6';
import '@/assets/styles/view-festival-details.css';
import Image from 'next/image';
import ImageActivites from '@/app/components/features/festival-details/ImageActivites';
import { useRouter } from 'next/navigation';
interface FestivalDetailsClientProps {
    festival: FestivalDetailsType;
}

const FestivalDetailsClient: React.FC<FestivalDetailsClientProps> = ({ festival }) => {
   const router = useRouter();
    return (
        <div className="fest-container">
            <div className='back-menu'>
        <button onClick={() => router.back()} className='back'>
            <FaAngleLeft/> <span className='back-hide'>back to festivals</span>
        </button>
    </div>
            <h5 className="fest-island-group">{festival.islandGroup}</h5>
            <h1 className="fest-header" style={{ backgroundImage: `url(${festival.img})`, backgroundPosition: '50% 50%' }}>
                {festival.title}
            </h1>
            <h5 className="fest-date">{festival.date}</h5>
            <h5 className="fest-loc">
                <FaMapPin size={12} />
                <span>{festival.location}</span>
            </h5>
            <div className="fest-parag-cont">
                <p className="fest-parag">{festival.paragraph1}</p>
                <br />
                <p className="fest-parag">{festival.paragraph2}</p>
                <div className="image" style={{ position: 'relative', width: '100%' }}>
                    <Image src={festival.img} alt={festival.title} layout="fill" objectFit="cover" />
                </div>
                <p className="fest-parag">{festival.paragraph3}</p>
                <br />
                <p className="fest-parag">{festival.paragraph4}</p>
                <h3>{festival.title} Activities</h3>

                <div className="container">
                    {Array.from({ length: 4 }, (_, index) => (
                        <ImageActivites key={index} imageUrl={festival[`imgItem${index + 1}` as keyof FestivalDetailsType]} />
                    ))}
                </div>

               <div className='video-wrapper'>
                  <iframe 
                     src={festival.ytPath} 
                     width={560}
                     height={315}
                     title='Youtube video player'
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                  />
               </div>

                <a className="content-fest-link-source" href={festival.ref}>
                    reference
                </a>
            </div>
        </div>
    );
};

export default FestivalDetailsClient;
