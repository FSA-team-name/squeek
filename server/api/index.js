const express = require("express");
const router = express.Router();
const search = require('./search')

router.get("/", (req, res) => {
  res.send("API router working");
});

router.use('/search', search);

module.exports = router;