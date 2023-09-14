const express = require("express");
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const { NotFoundError } = require("@prisma/client/runtime/library");

const prisma = new PrismaClient()

router.get("/", async (req, res) => {
  try {
    const posts = await prisma.squeek.findMany({
      include: {
        author: {
          select: {
            firstName: true,
            username: true,
            photo: true,
            verified: true
          }
        }
      },
      orderBy: {
        id: 'desc'
      }
    });
    res.send(posts);
  } catch (err) {
    console.log(err);
  }
});

router.get("/resqueek/:id", async (req, res) => {
  const { id } = req.params
  try {
    const post = await prisma.squeek.findUnique({
      where: {
        id: Number(id)
      },
      include: {
        author: {
          select: {
            firstName: true,
            username: true,
            photo: true,
            verified: true
          }
        }
      }
    });
    res.send(post);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;