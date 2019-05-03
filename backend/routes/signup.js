module.exports = (db, passport, LocalStrategy, session) => {
  var express = require("express");
  var router = express.Router();

  // add new user
  router.post("/", function(req, res, next) {
    db.User.create(req.body).then(err => {
      res.json(err);
    });
  });

  return router;
};
