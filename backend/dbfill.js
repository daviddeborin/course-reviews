module.exports = db => {
  db.User.create({
    username: "admin",
    password: "admin"
  });

  db.Course.create({
    number: "498rk1",
    subject: "CS",
    title: "The Art of Web Programming",
    rating: 5,
    difficulty: 3,
    number_of_reviews: 0,
    hours_1_4: 0,
    hours_5_9: 0,
    hours_10_14: 0,
    hours_15_19: 0,
    hours_20: 0
  });

  db.Course.create({
    number: "498aml",
    subject: "CS",
    title: "Applied Machine Learning",
    rating: 5,
    difficulty: 3,
    number_of_reviews: 0,
    hours_1_4: 0,
    hours_5_9: 0,
    hours_10_14: 0,
    hours_15_19: 0,
    hours_20: 0
  });

  db.Comment.create({
    course: 1,
    user: 1,
    comment: "here are more resources"
  });

  db.Comment.create({
    course: 2,
    user: 1,
    comment: "here are some resources"
  });

  db.Review.create({
    review: "good course",
    course: 1,
    professor: "prof smith",
    user: 1,
    hours: "0-4",
    difficulty: 3,
    rating: 5
  });

  db.Review.create({
    review: "good course",
    course: 2,
    professor: "prof smith",
    user: 1,
    hours: "0-4",
    difficulty: 3,
    rating: 5
  });
};
