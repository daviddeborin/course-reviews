module.exports = db => {
  var express = require("express");
  var router = express.Router();

  // post new comment
  router.post("/", function(req, res, next) {
    res.json({ message: "comment", name: "hi" });
  });

  return router;
};
