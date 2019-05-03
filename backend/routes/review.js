module.exports = db => {
  var express = require("express");
  var router = express.Router();

  router.post("/", function(req, res, next) {
    let subject = req.body.subject;
    let number = req.body.number;
    let courseId = req.body.courseId;
    let formData = req.body.formData;
    let hoursCol = "hours_" + formData.hours.replace("-", "_");

    let userid = null;
    if (req.sessionStore && req.sessionStore.sessions) {
      let sess = Object.entries(req.sessionStore.sessions);
      let len = sess.length;
      if (len != 0) {
        sess = JSON.parse(sess[len - 1][1]);
        userid = sess.passport.user;
      }
    }

    db.Review.create({
      review: formData.review,
      term: formData.term + ' ' + formData.year,
      course: courseId,
      professor: formData.professor,
      user: userid,
      hours: formData.hours,
      difficulty: formData.difficulty,
      rating: formData.rating
    });
    // update the proper hours/wk range col AND ++num_of_reviews column
    // retrieve the course's ID as well
    db.Course.findOne({
      where: { id: courseId }
    })
      .then(course => {
        console.log("hi1");
        return course.increment([hoursCol, "number_of_reviews"], { by: 1 });
      })
      .then(course => {
        res.status(200).send("OK");
      })
      .catch(err => res.send(err));

    // db.Review.create(req.body);
    // res.send(req.body);
  });

  // db.pets.findOne({
  //   name: 'Max'
  // })
  // .then(pet => {
  //   pet.updateAttributes({
  //     name: 'Maxy-boi-boi'
  //   });
  // });

  // const newData = {
  //   name: 'Maxy-boi-boi'
  // };

  // db.pets.update(newData, {where: { name: 'Max' } })
  // .then(updatedMax => {
  //   console.log(updatedMax)
  // })

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
