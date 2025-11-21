import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const connectDB=async function() {
    try {
        await prisma.$connect()
        console.log("Connected to Mongodb")
    } catch (error) {
        console.log(error)
    }
}

export default prisma;
