const express = require("express");
const router = express.Router();
const { checkAuth } = require("./utils.js");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", (req, res) => {
  res.send("reactions router working");
});

router.post("/", checkAuth, (req, res) => {
  const { squeekId, like } = req.body;
  let trueOrFalse = false;
  like ? trueOrFalse = false : trueOrFalse = true;
  try {
    console.log(trueOrFalse);
  } catch (err) {}
});

module.exports = router;
