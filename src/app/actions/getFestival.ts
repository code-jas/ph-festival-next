import prisma from '@/app/libs/prismadb';

interface Params {
  festivalId: string;
}

const getFestivalById = async (params: Params) => {
  try {
    const { festivalId } = params;
    const response = await fetch(`http://localhost:3000/api/v1/festivalDetails/${festivalId}`);


    if (!response.ok) {
      throw new Error('Error fetching festival details');
    }

    const festival = await response.json();
    return festival;
  } catch (error: any) {
    throw new Error(`Error fetching festival details: ${error.message}`);
  }
};

const getFestivals = async () => {
  try {
    const festivals = await prisma.festivalDetail.findMany({
      orderBy: {title: 'asc'}
    })

    return festivals
  } catch (error) {
    
  }
}


export { getFestivalById, getFestivals };
