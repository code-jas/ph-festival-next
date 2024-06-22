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
               fill
               sizes="100"
               style={{ transition: '0.5', objectFit: 'cover' }}
            />
         </div>
      </div>
   );
};

export default ImageActivites;
