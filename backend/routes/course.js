module.exports = db => {
  var express = require("express");
  var router = express.Router();

  // get all courses for search bar
  router.get("/", function(req, res, next) {
    res.json({ message: "course", name: "hi" });
    Subject.create({ name: "CS", courses: [] }).then(cs => {
      console.log("CS auto gen id", cs.id);
    });
  });

  // get specific course
  router.get("/:id", function(req, res, next) {
    res.json({ message: "course", name: "hi" });
    Subject.create({ name: "CS", courses: [] }).then(cs => {
      console.log("CS auto gen id", cs.id);
    });
  });

  return router;
};
