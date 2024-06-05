import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { parametersHelper } from "../../libs/parametersHelper";

const prisma = new PrismaClient();

export async function GET(request: Request) { 
    try {
        const { searchParams } = new URL(request.url);
        console.log('searchParams :>> ', searchParams);
        const params = parametersHelper(searchParams);
        console.log('params :>> ', params);
        
        const festivalDetails = await prisma.festivalDetail.findMany(params);

        return NextResponse.json(festivalDetails);
    } catch (error: any) {
        console.log('Error fetching festival details: ', error)
        return NextResponse.json({ error: 'An error occurred while fetching festival details' });
    }
}
    
