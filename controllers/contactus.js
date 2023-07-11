const root = require("../util/path");
const path = require("path");
exports.getContactus = (req, res, next) => {
  res.sendFile(path.join(root, "views", "contactus.html"));
};
