const express = require("express");
const router = express.Router();

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get("/", (req, res) => res.send("Get Auth"));

module.exports = router;
