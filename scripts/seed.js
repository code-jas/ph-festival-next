import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const prisma = new PrismaClient();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
console.log('__dirname :>> ', __dirname);

async function main() {
    // Remove existing data
    await prisma.festivalDetail.deleteMany({});


    const festivalDataPath = path.join(__dirname, 'festivalData.json');
    const festivalData = JSON.parse(fs.readFileSync(festivalDataPath, 'utf-8'));

    for(const festival of festivalData) { 
        await prisma.festivalDetail.create({
            data: festival
        })
    }

    console.log('Seeding Completed.');
}



main()
    .catch(e => {
        console.log(e);
        process.exit(1);
    })
    .finally(async () =>{
        await prisma.$disconnect();
    })