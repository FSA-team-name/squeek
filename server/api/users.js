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

router.get('/:username', async (req, res) => {
  const { username } = req.params
  try {
    const user = await prisma.user.findUnique({
      where: {username: username},
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
    if (user) {
      res.status(200).send(user)
    } else {
      res.status(404).send(`User not found`);
    }
  } catch (err) {
    console.log(err);
  }
})


module.exports = router;