const express = require("express");
const router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const { checkAuth } = require('./utils.js');

router.get("/", (req, res) => {
  res.send("Fav router working");
});

router.get("/myFavorites", checkAuth, async (req, res) => {
  const user = req.user ? req.user : 0;
  try {
    const userId = req.user;
    const favorites = await prisma.favorite.findMany({
      where: {
        authorId: userId, 
      },
      include: {
        squeek: {
          include: {
            author: {
              select: {
                id: true,
                firstName: true,
                username: true,
                photo: true,
              },
            },
            reactions: {
              where: {authorId: user}
             }
          },
        },
      },
    });
    res.send(favorites);
  } catch (error) {
    console.error("Error fetching favorites:", error);
    res.status(500).send({ error: "An error occurred while fetching favorites." });
  }
});

router.post("/fav/:id", checkAuth, async (req, res) => {
 const {id} = req.params;
  try{
    const fav = await prisma.favorite.create({
      data: {
        authorId: req.user,
        squeekId: Number(id),
      }
    })
    res.send(fav)
  } catch(err){
    console.log(err)
    res.status(500).send({ err: "An error occurred while adding a favorite." });
  }
})

module.exports = router;
