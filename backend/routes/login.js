module.exports = (db, passport, LocalStrategy, session) => {
  var express = require("express");
  var router = express.Router();

  // login auth
  router.post("/", function(req, res, next) {
    res.json({ message: "login", name: "hi" });
    Subject.create({ name: "CS", courses: [] }).then(cs => {
      console.log("CS auto gen id", cs.id);
    });
  });

  return router;
};
