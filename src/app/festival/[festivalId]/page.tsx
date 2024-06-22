// src/app/festival/[festivalId]/page.tsx
import { getFestivalById } from '@/app/actions/getFestival';
import ClientOnly from '@/app/components/common/ClientOnly';
import FestivalDetailsClient from './FestivalDetailsClient';
import { notFound } from 'next/navigation';

interface Params {
   festivalId: string;
}

const FestivalDetailsPage = async ({ params }: { params: Params }) => {
   const festival = await getFestivalById(params);
   console.log('festival :>> ', festival);

   if (!festival || Object.keys(festival).length === 0) {
      notFound();
      return null;
   }

   return (
      <ClientOnly>
         <FestivalDetailsClient festival={festival} />
      </ClientOnly>
   );
};

export default FestivalDetailsPage;
