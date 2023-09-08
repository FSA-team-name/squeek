const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const seed = async () => {
  console.log(`STARTING SEED`);
  console.log(`CREATING USERS`);

  await prisma.user.create({
    data: {
      username: "wyatt",
      password: "wyatt123",
      email: "wyatt@gmail.com",
      firstName: "wyatt",
      lastName: "rajer",
      verified: true,
      squeeks: {
        create: {
          text: "whatsup squeekers",
        },
      },
    },
  });

  await prisma.user.create({
    data: {
      username: "mateo",
      password: "mateo123",
      email: "mateo@gmail.com",
      firstName: "mateo",
      lastName: "flores",
      verified: true,
      squeeks: {
        create: {
          text: "hello world cryingemoji laughingemoji",
        },
      },
    },
  });

  await prisma.user.create({
    data: {
      username: "jt",
      password: "jt123",
      email: "jt@gmail.com",
      firstName: "jt",
      lastName: "pricone",
      verified: true,
      squeeks: {
        create: {
          text: "nibble this squeek",
        },
      },
    },
  });

  console.log(`USERS CREATED`);
  console.log(`CREATING REPLIES`);

  await prisma.reply.createMany({
    data: [
    {
      text: 'good to finally be here',
      authorId: 1,
      squeekId: 2,
    },
    {
      text: 'i squeek',
      authorId: 1,
      squeekId: 3,
    },
    {
      text: 'really need to implement emojis',
      authorId: 2,
      squeekId: 2,
    },
    {
      text: 'okay for sure',
      authorId: 2,
      squeekId: 3,
    },
    {
      text: 'yeah that would be tight',
      authorId: 3,
      squeekId: 2,
    }
  ]
  });

  console.log(`REPLIES CREATED`);
  console.log(`CREATING REACTIONS`);

  await prisma.reaction.createMany({
    data: [
    {
      authorId: 1,
      squeekId: 2,
    },
    {

      authorId: 1,
      squeekId: 3,
    },
    {
      authorId: 2,
      squeekId: 2,
    },
    {
      authorId: 2,
      squeekId: 3,
    },
    {
      authorId: 3,
      squeekId: 2,
    }
  ]
  });

  console.log(`REACTIONS CREATED`)

};

seed();
