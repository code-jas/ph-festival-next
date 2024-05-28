import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) { 
    try {
        const festivalDetails = await prisma.festivalDetail.findMany();
        return NextResponse.json(festivalDetails);
    } catch (error: any) {
        console.log('Error fetching festival details: ', error)
        return NextResponse.json({error: 'An error occured while fetching festival details'});
    }
}