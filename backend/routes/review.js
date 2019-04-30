module.exports = db => {
  var express = require("express");
  var router = express.Router();

  // post new review
  router.post("/", function(req, res, next) {
    res.json({ message: "review", name: "hi" });
    Subject.create({ name: "CS", courses: [] }).then(cs => {
      console.log("CS auto gen id", cs.id);
    });
  });

  return router;
};
