module.exports = db => {
  var express = require("express");
  var router = express.Router();

  // get all courses for search bar
  router.get("/", function(req, res, next) {
    db.Course.findAll({}).then(courses => {
      res.json(courses);
    });
  });

  router.get("/:id", function(req, res, next) {
    const id = req.params.id;
    db.Course.findByPk(id).then(course => {
      if (course != null) {
        res.json(course);
      } else {
        res.status(404).json({ err: "not found" });
      }
    });
  });

  return router;
};
