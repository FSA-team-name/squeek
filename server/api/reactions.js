const express = require("express");
const router = express.Router();
const { checkAuth } = require("./utils.js");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", (req, res) => {
  res.send("reactions router working");
});

router.post("/", checkAuth, async (req, res) => {
  const { squeekId, replyId, like } = req.body;
  const dislike = like ? false : true;
  const isSqueekId = squeekId ? squeekId : null;
  const isReplyId = replyId ? replyId : null;
  try {
   const reaction = await prisma.reaction.create({
      data: {
        like: like,
        dislike: dislike,
        authorId: req.user,
        squeekId: isSqueekId,
        replyId: isReplyId
      }
    });
    res.status(201).send(reaction);
  } catch (err) {
    console.log(err)
  }
});

module.exports = router;
