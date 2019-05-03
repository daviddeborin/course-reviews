module.exports = db => {
  var express = require("express");
  var router = express.Router();

  router.post("/", function(req, res, next) {

    console.log(req.body);
    let userid = null;
    if (req.sessionStore && req.sessionStore.sessions) {
      let sess = Object.entries(req.sessionStore.sessions);
      let len = sess.length;
      if (len != 0) {
        sess = JSON.parse(sess[len - 1][1]);
        userid = sess.passport.user;
      }
    }

    db.Comment.create({
      course : req.body.courseId,
      user : userid,
      comment : req.body.comment
    }).then((resp) => {
      res.status(200).send("OK");
    }).catch((err) => {
      res.status(404).send("Not posted");
    })
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
