const root = require("../util/path");
const path = require("path");
exports.getSuccess = (req, res, next) => {
  res.sendFile(path.join(root, "views", "success.html"));
};
