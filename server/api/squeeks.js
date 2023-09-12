const express = require("express");
const router = express.Router();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

router.get("/", async (req, res) => {
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
});

module.exports = router;