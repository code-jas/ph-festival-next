// src/app/api/v1/festivalDetails/[festivalId]/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';

interface IParams {
   festivalId?: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {
   const { festivalId } = params;
   if (!festivalId) {
      return NextResponse.json({ error: 'Festival ID is required' }, { status: 400 });
   }

   try {
      const festivalDetails = await prisma.festivalDetail.findUnique({
         where: { id: festivalId },
      });

      if (!festivalDetails) {
         return NextResponse.json({ error: 'Festival not found' }, { status: 404 });
      }

      return NextResponse.json(festivalDetails);
   } catch (error: any) {
      console.error('Error fetching festival details: ', error);
      return NextResponse.json(
         { error: 'An error occurred while fetching festival details' },
         { status: 500 },
      );
   }
}
