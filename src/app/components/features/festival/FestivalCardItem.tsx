import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface FestivalCardItemProps {
   id: string;
   img: string;
   title: string;
   description: string;
}

const FestivalCardtem: React.FC<FestivalCardItemProps> = ({ id, img, title, description }) => {
   const truncateWords = (str: string, numWords = 20) => {
      return str.split(' ').slice(0, numWords).join(' ') + '...';
   };

   return (
      <Link href={{ pathname: `/festival/${id}` }}>
         <div className="festival-card">
            <div className="img-box">
               <Image
                  src={img}
                  alt={title}
                  width={300}
                  height={378}
                  style={{ objectFit: 'cover' }}
               />
            </div>
            <div className="fest-info">
               <h3>{title}</h3>
               <div className="short-desc">
                  <p>{truncateWords(description)}</p>
               </div>
            </div>
         </div>
      </Link>
   );
};

export default FestivalCardtem;
