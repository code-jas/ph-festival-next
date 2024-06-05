import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    console.log('request :>> ', request);
    const { searchParams } = new URL(request.url);
    const festivalId = searchParams.get('festivalId');

    console.log('Festival ID :>> ', festivalId);

    // Example of fetching data from a database (assuming prisma is set up)
    const festivalDetails = await prisma.festivalDetail.findUnique({ where: { id: festivalId } });
    
    // For now, return an empty object as a placeholder
    return NextResponse.json({});
  } catch (error: any) {
    console.error('Error fetching festival details: ', error);
    return NextResponse.json({ error: 'An error occurred while fetching festival details' }, { status: 500 });
  }
}
