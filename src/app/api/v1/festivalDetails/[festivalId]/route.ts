import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';

interface IParams {
   festivalId?: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {
   try {
      const { festivalId } = params;

      const festivalDetails = await prisma.festivalDetail.findUnique({ where: { id: festivalId } });
      console.log('festivalDetails :>> ', festivalDetails);
      return NextResponse.json(festivalDetails);
   } catch (error: any) {
      console.error('Error fetching festival details: ', error);
      return NextResponse.json(
         { error: 'An error occurred while fetching festival details' },
         { status: 500 },
      );
   }
}
