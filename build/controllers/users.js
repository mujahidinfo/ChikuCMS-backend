"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// controllers/users.ts
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const users = async () => {
    return await prisma.user.findMany();
};
const createUser = async (name, email) => {
    return await prisma.user.create({
        data: {
            name,
            email
        }
    });
};
exports.default = {
    users,
    createUser
};
//# sourceMappingURL=users.js.map