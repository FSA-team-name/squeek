const express = require("express");
const router = express.Router();
const search = require('./search')
const squeeks = require('./squeeks')
const users = require('./users')
const favorites = require('./favorites')

router.get("/", (req, res) => {
  res.send("API router working");
});

router.use('/search', search);
router.use('/squeeks', squeeks);
router.use('/users', users);
router.use('/favorites', favorites)

module.exports = router;