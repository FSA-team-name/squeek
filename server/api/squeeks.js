const express = require("express");
const router = express.Router();
const { checkAuth } = require("./utils.js");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const user = req.user ? req.user : 0;
  console.log(user)
  try {
    const posts = await prisma.squeek.findMany({
      include: {
        author: {
          select: {
            firstName: true,
            username: true,
            photo: true,
            verified: true,
          },
        },
        reactions: {
         where: {authorId: user}
        }
      },
      orderBy: {
        id: "desc",
      },
    });
    res.send(posts);
  } catch (err) {
    console.log(err);
  }
});

router.get("/resqueek/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await prisma.squeek.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        author: {
          select: {
            firstName: true,
            username: true,
            photo: true,
            verified: true,
          },
        },
      },
    });
    res.send(post);
  } catch (err) {
    console.log(err);
  }
});

router.post('/resqueek/:id', checkAuth, async(req, res) => {
  const { id } = req.params;
  try {
    const squeek = await prisma.squeek.create({
      data: {
        authorId: req.user,
        text: req.body.text,
        reSqueekId: Number(id)
      },
    });
    res.status(201).send(squeek);
  } catch (err) {
    console.log(err)
    res.status(400).send(err);
  }
})

router.post("/", checkAuth, async (req, res) => {
  try {
    const squeek = await prisma.squeek.create({
      data: {
        authorId: req.user,
        text: req.body.text,
      },
    });
    res.status(201).send(squeek);
  } catch (err) {
    res.send(err);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = req.user ? req.user : 0;
  try {
    const post = await prisma.squeek.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        author: {
          select: {
            firstName: true,
            username: true,
            photo: true,
            verified: true,
          },
        },
        replies: {
          include: {
            author: {
              select: {
                firstName: true,
                username: true,
                photo: true,
                verified: true,
              },
            },
          },
        },
        reactions: {
          where: {authorId: user}
         },
         favorites: {
          where: {authorId: user}
         }
      },
    });
    res.send(post);
  } catch (err) {
    console.log(err);
  }
});

router.post('/:squeekId/reply',checkAuth, async (req, res) => {
  const { squeekId } = req.params;
  const { text } = req.body;
  console.log(squeekId, text)
  try {
    const reply = await prisma.reply.create({
      data: {
        text: text,
        authorId: req.user,
        squeekId: Number(squeekId)
      }
    })

      res.status(201).send(reply)
   

  
  } catch (err) {
    console.log(err)
    res.status(500).send('internal server error')
  }
})

module.exports = router;
