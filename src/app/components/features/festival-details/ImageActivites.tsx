import Image from 'next/image';
import React from 'react';

interface ImageActivitesProps {
   imageUrl: any;
}

const ImageActivites: React.FC<ImageActivitesProps> = ({ imageUrl }) => {
   return (
      <div className="box">
         {imageUrl || '-'}
         <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
               src={imageUrl}
               alt={imageUrl}
               layout="fill"
               objectFit="cover"
               style={{ transition: '0.5' }}
            />
         </div>
      </div>
   );
};

export default ImageActivites;
