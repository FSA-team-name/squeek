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

module.exports = router;