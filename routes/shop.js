const express = require("express");
const path = require("path");
const router = express.Router();
const rootFolder = require("../util/path");
router.get("/", (req, res, next) => {
  console.log("In another one");
  res.sendFile(path.join(rootFolder, "views", "shop.html"));
});
module.exports = router;
