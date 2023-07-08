const express = require("express");
const router = express.Router();
router.get("/add-product", (req, res, next) => {
  res.send(
    "<form action='/admin/product' method='POST'><input name='Title' type='text'/> <input name='amount' type='number'/> <button type='submit'>Add</button> </form>"
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
