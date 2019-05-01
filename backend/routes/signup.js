module.exports = db => {
  var express = require("express");
  var router = express.Router();

  // add new user
  router.post("/", function(req, res, next) {
    console.log(req.body);
    db.User.create(req.body).then(err => {
      res.json(err);
    });
  });

  return router;
};
