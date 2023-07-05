const express = require("express");

const app = express();
app.use((req, res, next) => {
  console.log("IN Middleware");
  next();
});

app.use((req, res, next) => {
  console.log("In another one");
  res.send({ key1: 18 });
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
