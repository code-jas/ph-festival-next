import React from 'react';
import { FaMapPin } from 'react-icons/fa6';

interface FestivalDetailsHeaderProps {
   islandGroup: string;
   img: string;
   title: string;
   date: string;
   location: string;
}

const FestivalDetailsHeader: React.FC<FestivalDetailsHeaderProps> = ({
   islandGroup,
   img,
   title,
   date,
   location,
}) => {
   return (
      <>
         <h5 className="fest-island-group">{islandGroup}</h5>
         <h1
            className="fest-header"
            style={{ backgroundImage: `url(${img})`, backgroundPosition: '50% 50%' }}
         >
            {title}
         </h1>
         <h5 className="fest-date">{date}</h5>
         <h5 className="fest-loc">
            <FaMapPin size={12} />
            <span>{location}</span>
         </h5>
      </>
   );
};

export default FestivalDetailsHeader;
