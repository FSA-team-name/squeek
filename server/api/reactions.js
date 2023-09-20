const express = require("express");
const router = express.Router();
const { checkAuth } = require("./utils.js");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", checkAuth, async (req, res) => {
  try {
    const reactions = await prisma.reaction.findMany({
      where: {
        authorId: req.user
      }
    })
    res.send(reactions)
  } catch (err) {
    console.log(err)
  }
});

router.post("/:id", checkAuth, async (req, res) => {
  const { id } = req.params;
  const { like } = req.body;
  const dislike = like ? false : true;
  try {
   const reaction = await prisma.reaction.create({
      data: {
        like: like,
        dislike: dislike,
        authorId: req.user,
        squeekId: Number(id),
      }
    });
    res.status(201).send(reaction);
  } catch (err) {
    console.log(err)
    res.status(500).send("You can't react to something more than once")
  }
});

module.exports = router;
