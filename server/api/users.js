const express = require("express");
const router = express.Router();
const { checkAuth } = require('./utils.js');
const { PrismaClient } = require("@prisma/client");


const prisma = new PrismaClient();

router.get('/', (req, res) => {
  res.send('users route working')
})

router.get('/me', checkAuth, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {id: req.user},
      select: {
        id: true,
        bio: true,
        username: true,
        firstName: true,
        lastName: true,
        photo: true,
        dateJoined: true,
        verified: true,
        squeeks: {
          include: {
            author: {
              select: {
                username: true,
                firstName: true,
                photo: true,
                verified: true
              }
            }
          }
        },
        replies: {
          include: {
            author: {
              select: {
                username: true,
                firstName: true,
                photo: true,
                verified: true
              }
            }
          }
        }
      }
    });
    res.status(200).send({id: user.id, username: user.username})
  } catch (err) {
    console.log(err);
  }
})

router.get('/:username', async (req, res) => {
  const { username } = req.params
  try {
    const user = await prisma.user.findUnique({
      where: {username: username},
      select: {
        username: true,
        firstName: true,
        lastName: true,
        photo: true,
        dateJoined: true,
        verified: true,
        squeeks: {
          include: {
            author: {
              select: {
                username: true,
                firstName: true,
                photo: true,
                verified: true
              }
            }
          }
        }
      }
    });
    if (user) {
      res.status(200).send(user)
    } else {
      res.status(404).send(`User not found`);
    }
  } catch (err) {
    console.log(err);
  }
})

router.put("/:id", async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });
    if (!user) {
      res.status(404).send({ error: true, message: "User Not Found" });
    } else {
      res.status(201).send(user);
    }
  } catch (error) {
    res.send(error);
  }
});


module.exports = router;
