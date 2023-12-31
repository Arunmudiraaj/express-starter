const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const contactusControllers = require("./controllers/contactus");
const successControllers = require("./controllers/success");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);

app.use("/shop", shopRoutes);

app.get("/contactus", contactusControllers.getContactus);

app.get("/success", successControllers.getSuccess);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
