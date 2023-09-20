const express = require("express");
const router = express.Router();
const { checkAuth } = require("./utils.js");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", (req, res) => {
  res.send("reactions router working");
});

router.post("/", checkAuth, async (req, res) => {
  const { squeekId, like } = req.body;
  const dislike = like ? false : true;
  try {
   const reaction = await prisma.reaction.create({
      data: {
        like: like,
        dislike: dislike,
        authorId: req.user,
        squeekId: squeekId,
      }
    });
    res.status(201).send(reaction);
  } catch (err) {
    console.log(err)
    res.status(500).send("You can't react to something twice")
  }
});

module.exports = router;
