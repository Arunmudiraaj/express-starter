const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input name='Title' type='text'/> <input name='amount' type='number'/> <button type='submit'>Add</button> </form>"
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("In another one");
  res.send("<h2>Hello Express</h2>");
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
