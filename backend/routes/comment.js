module.exports = db => {
  var express = require("express");
  var router = express.Router();

  // post new comment
  // something like this: http://localhost:9000/comment/?user=1&course=1&comment=yo%20yo
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
