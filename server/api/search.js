const express = require("express");
const router = express.Router();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

router.get("/", (req, res) => {
  res.send("Search router working");
});

module.exports = router;