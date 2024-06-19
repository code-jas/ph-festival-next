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
import { FestivalDetail } from '@prisma/client';

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
         router.push(`/festival?t=${view}`);
      } else {
         setView(viewParam);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [router, searchParams]);

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

   const categories = [
      'all',
      ...new Set(festivals.map((item: FestivalDetail) => item.islandGroup)),
   ];

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
                     <FestivalGallery festivals={festivals} categories={categories} />
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
