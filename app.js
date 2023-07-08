const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRoutes);

app.use("/shop", shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Error Page not found</h2>");
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
