module.exports = db => {
  var express = require("express");
  var router = express.Router();

  router.post("/", function(req, res, next) {
    let subject = req.body.subject;
    let number = req.body.number;
    let formData = req.body.formData;
    // find course with the subject and number
    // update the proper hours/wk range col AND ++num_of_reviews column
    db.Course.findAll({
      where: { subject: "cs", number: number }
    })
      .then(result => res.send(result))
      .catch(err => res.send("balls"));

    // db.Review.create(req.body);
    // res.send(req.body);
  });

  // {
  //   "subject": "cs",
  //   "number": "498aml",
  //   "formData": {
  //     "rating" : 1,
  //       "difficulty": 1,
  //       "hours" : "1-4",
  //       "term" : "spring",
  //       "year" : 2018,
  //       "professor" : "Ranjitha Kumar",
  //       "description" : "This is one of my favorite classes at UIUC. It's extremely useful and fun!"
  //   }
  // }

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
