const express = require("express");
const router = express.Router();
const search = require("./search");
const squeeks = require("./squeeks");
const reactions = require("./reactions");
const users = require("./users");

router.get("/", (req, res) => {
  res.send("API router working");
});

router.use("/search", search);
router.use("/squeeks", squeeks);
router.use("/reactions", reactions);
router.use("/users", users);

module.exports = router;
