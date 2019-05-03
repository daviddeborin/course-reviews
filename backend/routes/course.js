module.exports = db => {
  var express = require("express");
  var router = express.Router();

  // get all courses for search bar
  router.get("/", function(req, res, next) {
    db.Course.findAll({}).then(courses => {
      res.json(courses);
    });
  });

  router.get("/:subject/:courseNumber", function(req, res, next) {
    const query = {
      subject : req.params.subject,
      number : req.params.courseNumber
    }
    db.Course.findOne({where : query}).then(course => {
      if (course != null) {
        res.json(course);
      } else {
        res.status(404).json({ err: "Course not found" });
      }
    });
  });

  return router;
};
