'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { FestivalDetailsType } from '../typings/festival-detail-type';
import FestivalGallery from '@/app/components/features/festival/FestivalGallery';
import FestivalTimeline from '@/app/components/features/festival/FestivalTimeline';
import ViewButtons from '@/app/components/features/festival/ViewButtons';
import BackToTopButton from '../components/common/BackToTopButton';

import '@/assets/styles/festival.css';
import '@/assets/styles/backtotop.css';

interface FestivalClientProps {
   festivals: FestivalDetailsType[];
}

const FestivalsClient: React.FC<FestivalClientProps> = ({ festivals }) => {
   const router = useRouter();
   const searchParams = useSearchParams();
   const [view, setView] = useState('gallery'); // Default view

   useEffect(() => {
      const viewParam = searchParams.get('t');
      if (!viewParam) {
         router.replace(`/festival?t=${view}`);
      } else {
         setView(viewParam);
      }
   }, []);

   useEffect(() => {
      const viewParam = searchParams.get('t');
      if (viewParam) {
         setView(viewParam);
      }
   }, [searchParams]);

   const toggleView = (view: string) => {
      setView(view);
      router.push(`/festival?t=${view}`);
   };

   return (
      <>
         <BackToTopButton />
         <ViewButtons view={view} toggleView={toggleView} />
         <div className="js-cont">
            <div className="js-scroll">
               <div className="global-fest bg-color-el">
                  <div className="gall-title">
                     <h1>Festival {view === 'gallery' ? 'Gallery' : 'Timeline'}</h1>
                     <div className="underline"></div>
                  </div>
                  {view === 'gallery' ? (
                     <FestivalGallery festivals={festivals} />
                  ) : (
                     <FestivalTimeline festivals={festivals} />
                  )}
               </div>
            </div>
         </div>
      </>
   );
};

export default FestivalsClient;
