const express = require("express");

const router = express.Router();
router.get("/", (req, res, next) => {
  console.log("In another one");
  res.send("<h2>Hello Express</h2>");
});
module.exports = router;
