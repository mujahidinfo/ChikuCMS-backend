// controllers/users.ts
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

const users = async () => {
    return await prisma.user.findMany();
};

const createUser = async (name: string, email: string) => {
    return await prisma.user.create({
        data: {
            name,
            email
        }
    });
};

export default {
    users,
    createUser
};