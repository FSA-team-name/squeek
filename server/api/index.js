const express = require("express");
const router = express.Router();
const search = require('./search')
const squeeks = require('./squeeks')

router.get("/", (req, res) => {
  res.send("API router working");
});

router.use('/search', search);
router.use('/squeeks', squeeks);

module.exports = router;