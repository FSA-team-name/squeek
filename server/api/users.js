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
        username: true,
        firstName: true,
        lastName: true,
        photo: true,
        dateJoined: true,
        verified: true,
        squeeks: true
      }
    });
    res.status(200).send(user)
  } catch (err) {
    console.log(err);
  }
})



module.exports = router;