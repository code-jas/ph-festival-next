import prisma from '@/app/libs/prismadb';

interface Params {
   festivalId: string;
}

const getFestivalById = async (params: Params) => {
   try {
      const { festivalId } = params;
      console.log('festivalId  ay :>> ', festivalId);

      const festival = await prisma.festivalDetail.findFirst({ where: { id: festivalId } });
      if (!festival) {
         throw new Error('Error fetching festival details');
      }

      return festival;
   } catch (error: any) {
      throw new Error(`Error fetching festival details: ${error.message}`);
   }
};

const getFestivals = async () => {
   try {
      const festivals = await prisma.festivalDetail.findMany({
         orderBy: { title: 'asc' },
      });

      return festivals;
   } catch (error: any) {
      throw new Error(`Error fetching festivals: ${error.message}`);
   }
};

export { getFestivalById, getFestivals };
