import React, { Suspense } from 'react';
import { getFestivals } from '../actions/getFestival';
import FestivalsClient from './FestivalClient';
import LoadingSkeletonCard from '../components/common/SkeletonLoadingCard';

const FestivalPage = async () => {
   const festivals = await getFestivals();

   if (!festivals) {
      return <div>Festival did not fetch</div>;
   }

   return (
      <Suspense fallback={<LoadingSkeletonCard size={8} />}>
         <FestivalsClient festivals={festivals} />
      </Suspense>
   );
};

export default FestivalPage;
