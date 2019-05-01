module.exports = db => {
  var express = require("express");
  var router = express.Router();

  // post new review
  // something like this: http://localhost:9000/review/?user=1&course=1&comment=yo%20yo
  // might want to add checks to make sure the req.query data has all the fields?
  router.post("/", function(req, res, next) {
    db.Review.create(req.query).then(err => {
      res.json(err);
    });
  });

  // get all reviews for a course id
  router.get("/:id", function(req, res, next) {
    const id = req.params.id;
    db.Review.findAll({
      where: { course: id }
    }).then(todo => {
      res.json(todo);
    });
  });

  return router;
};
