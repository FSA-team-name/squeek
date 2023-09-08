const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const seed = async () => {
  console.log(`STARTING SEED`);
  console.log(`CREATING USERS`);

  await prisma.user.create({
    data: {
      username: 'wyatt',
      password: 'wyatt123',
      email: 'wyatt@gmail.com',
      firstName: 'wyatt',
      lastName: 'rajer',
      verified: true,
      squeeks: {
        create: {
          text: 'whatsup squeekers',
        }
      }
    }
  });

  await prisma.user.create({
    data: {
      username: 'mateo',
      password: 'mateo123',
      email: 'mateo@gmail.com',
      firstName: 'mateo',
      lastName: 'flores',
      verified: true,
      squeeks: {
        create: {
          text: 'hello world cryingemoji laughingemoji',
        }
      }
    }
  });

  await prisma.user.create({
    data: {
      username: 'jt',
      password: 'jt123',
      email: 'jt@gmail.com',
      firstName: 'jt',
      lastName: 'pricone',
      verified: true,
      squeeks: {
        create: {
          text: 'nibble this squeek',
        }
      }
    }
  });

  console.log(`USERS CREATED`);

}

seed();