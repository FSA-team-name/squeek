const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


router.get("/", (req, res) => {
  res.send("Auth router working");
});


const randomImageUrls = [
  'https://th.bing.com/th/id/OIP.YjJSBQVO5Cy9RBxwNqfj7AHaJ5?w=124&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  'https://th.bing.com/th/id/OIP.2KNuhbtB8r4PSVvxO-b0qQHaGB?pid=ImgDet&w=198&h=160&c=7&dpr=1.3',
  'https://th.bing.com/th/id/OIP.kXxskmLB8ZKeSSKC6vMSXQHaEo?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  'https://th.bing.com/th/id/OIP.BWs4LNzdAXaygFAHLRTB_QHaEo?w=312&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  'https://th.bing.com/th/id/OIP.eNdWQ2Bb35OQG3vBjymQHQHaEo?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  'https://th.bing.com/th/id/OIP.hkzkB_vZ0_NZ6qCIdkWWWwHaEo?w=233&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  'https://th.bing.com/th/id/OIP.hLTThhxHPeGqFQVjpD1-hwHaE8?w=231&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  'https://th.bing.com/th/id/OIP.0ryJmAnJNdQsnHwlhBcfVgHaEK?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  'https://th.bing.com/th/id/OIP.xSoKcfUCmwgBTs2u-m1ktgHaFj?w=225&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  'https://th.bing.com/th/id/OIP.EKnb0mPiaiFeoenA4IUQwwHaEo?w=226&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  
];


const getRandomImageUrl = () => {
  const randomIndex = Math.floor(Math.random() * randomImageUrls.length);
  return randomImageUrls[randomIndex];
}


router.post("/register", async (req, res) => {
  try{
    const user = req.body;
    user.password = await bcrypt.hash(user.password, 10)

    user.photo = getRandomImageUrl();

    const result = await prisma.user.create({
      data: user
    })

    if(result){
      const token = jwt.sign({id: result.id}, process.env.JWT)
      res.status(201).send({token});
    } else{
      res.send({message: "Couldn't create new user"})
    }
  } catch(err){
    res.send(err.message)
  }
})


router.post("/login", async (req, res) => {
  const {username, password} = req.body;

  const user = await prisma.user.findUnique({
    where: {username: username}
  }) 

  if(user){
    const passwordMatch = await bcrypt.compare(password, user.password);
    if(passwordMatch){
      const token = jwt.sign({id: user.id}, process.env.JWT)
      res.status(201).send({token})
    }else{
      res.send({message: 'couldnt find user'})
    }
  }else{
    res.send({message: 'couldnt find user'})
  }


})


module.exports = router;