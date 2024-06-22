import React from 'react';
import { getFestivals } from '../actions/getFestival';
import FestivalsClient from './FestivalClient';

const FestivalPage = async () => {
   const festivals = await getFestivals();

   if (!festivals) {
      return <div> Festival did not fetched</div>;
   }

   return <FestivalsClient festivals={festivals} />;
};

export default FestivalPage;
