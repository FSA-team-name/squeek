const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const seed = () => {
  console.log(`i work`);
}

seed();