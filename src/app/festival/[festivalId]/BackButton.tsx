import React from 'react';
import { FaAngleLeft } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

const BackButton: React.FC = () => {
   const router = useRouter();
   return (
      <div className="back-menu">
         <button onClick={() => router.back()} className="back">
            <FaAngleLeft /> <span className="back-hide">back to festivals</span>
         </button>
      </div>
   );
};

export default BackButton;
