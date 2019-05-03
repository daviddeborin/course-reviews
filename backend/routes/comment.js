module.exports = db => {
  var express = require("express");
  var router = express.Router();

  router.post("/", function(req, res, next) {
    db.Comment.create(req.query).then(err => {
      res.json(err);
    });
  });

  // get all comments for a course id
  router.get("/:id", function(req, res, next) {
    const id = req.params.id;
    db.Comment.findAll({
      where: { course: id }
    }).then(todo => {
      res.json(todo);
    });
  });

  return router;
};
