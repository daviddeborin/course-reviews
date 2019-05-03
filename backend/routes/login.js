module.exports = (db, passport, LocalStrategy, session) => {
  var express = require("express");
  var router = express.Router();

  // login auth
  router.get('/', function(req, res, next) {
    res.json('hi');
  })
  

  router.post('/', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      console.log(req);
      if (err) { res.status(404).send(err) }
      if (!user) { res.status(404).send({message : 'no user'}); }
      req.logIn(user, function(err) {
        if (err) { res.status(404).send(err); return; }
        res.status(200).send(user);
      });
    })(req, res, next);
  });

  return router;
};
