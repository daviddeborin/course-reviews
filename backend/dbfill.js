module.exports = db => {
  db.User.create({
    username: "David Deborin",
    password: "mayo1234"
  });
  
  db.User.create({
    username : 'David Deborinn',
    password : 'mayo123'
  });

  db.Course.create({
    number: "498rk1",
    subject: "cs",
    title: "The Art of Web Programming",
    rating: 5,
    difficulty: 3,
    number_of_reviews: 1,
    hours_1_4: 0,
    hours_5_9: 1,
    hours_10_14: 0,
    hours_15_19: 0,
    hours_20: 0
  });

  db.Course.create({
    number: "498aml",
    subject: "cs",
    title: "Applied Machine Learning",
    rating: 5,
    difficulty: 3,
    number_of_reviews: 1,
    hours_1_4: 0,
    hours_5_9: 1,
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
    term: "Spring",
    course: 1,
    professor: "prof smith",
    user: 1,
    hours: "1-4",
    difficulty: 3,
    rating: 5
  });

  db.Review.create({
    review: "good course",
    term: "Fall",
    course: 2,
    professor: "prof smith",
    user: 1,
    hours: "1-4",
    difficulty: 3,
    rating: 5
  });
};
