const express = require("express");
const router = express.Router();
const { checkAuth } = require("./utils.js");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", (req, res) => {
  res.send("reactions router working");
});

module.exports = router;