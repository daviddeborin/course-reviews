module.exports = db => {

  db.User.create({
    username: "David Deborin",
    password: "mayo1234"
  });
  
  db.User.create({
    username : 'David Deborin',
    password : 'mayo123'
  });

  class Course {
    constructor(subject, number, title, profs) {
      this.subject = subject;
      this.number = number;
      this.title = title;
      this.profs = profs;
    }
  }

  let reviewsList = [
    "This course was great!",
    "Very practical course.",
    "The course is very exam heavy with little room for error.",
    "This course was extremely theoretical.",
    "The class consists of 4 small partner projects and one final project. Make sure to pick a good group!",
    "The professor does a great job posting notes online. The course itself has a great mix of theory and application.",
    "Do. Not. Take. This. Class.",
    "There are weekly hw assignments and monthly exams. HW is worth 30% of the grade, so make sure to do that.",
    "The most useful course in the curriculum",
    "Loved the course.",
    "Hated the course.",
    "A little bit disorganized.",
    "Varies greatly depending on your professor",
    "PLENTY of group work.",
    "Useful for interviews and internships.",
    "Most fun I've had in a class.",
    "Most difficult class I've taken.",
    "Even though she may not teach this class, Ranjitha is THE BEST!",
    "Make sure to take this class with a light scheduale",
    "This class is vital for the rest of the curriculum",
    "I enjoyed this class so much that I want to CA the course",
    'Professor likes to give pop quizzes. The homeworks are very useful.'
  ];

  let commentsList = [
    "This class is very youtubable :)",
    "Any book reccomendations for this class?",
    "Do you guys know of any GroupMe links for this course?"
  ];

  let termsList = ["Spring", "Fall", 'Winter', 'Summer'];
  let hoursList = ["1-4", '5-9', '10-14', '15-19', '20'];

  let coursesList = [];

  let c1 = new Course("cs", 100, "Freshman Orientation", ["Gunter", "Pitt"]);
  let c2 = new Course("cs", 125, "Intro to Computer Science", ["Challen", "Angrave", 'Chapman']);
  let c3 = new Course("cs", 126, "Software Design Studio", ["Evans", "Zilles", 'Angrave']);
  let c4 = new Course("cs", 173, "Discrete Structures", ["Warnow", "Fleck", 'Evans', "Meseguer"]);
  let c5 = new Course("cs", 225, "Data Structures", ["Wade", "Heeren", 'Zilles']);
  let c6 = new Course("cs", 241, "Systems Programming", ["Angrave", "Evans"]);
  let c7 = new Course("cs", 374, "Intro to Algs & Models of Comp", ["Erickson", "Borisov", 'Chekuri']);

  let c8 = new Course("math", 221, "Calculus 1", ['Bradlow', 'Mortensen', 'Anema', 'Davidson']);
  let c9 = new Course("math", 231, "Calculus 2", ['Bradlow', 'Mortensen', 'Anema', 'Davidson', 'Hasler']);
  let c10 = new Course("math", 241, "Calculus 3", ['Bradlow', 'Mortensen', 'Anema', 'Davidson', 'West']);
  let c11 = new Course("math", 285, "Intro Differential Equations", ['Bradlow', 'Ruan', 'Anema', 'Davidson']);
  let c12 = new Course("math", 347, "Fundamental Mathematics", ['Li', 'Kim', 'Ruan', 'Borman']);

  coursesList.push(c1);
  coursesList.push(c2);
  coursesList.push(c3);
  coursesList.push(c4);
  coursesList.push(c5);
  coursesList.push(c6);
  coursesList.push(c7);
  coursesList.push(c8);
  coursesList.push(c9);
  coursesList.push(c10);
  coursesList.push(c11);
  coursesList.push(c12);

  for (let i = 0; i < coursesList.length; i++) {
    let num = coursesList[i].number;
    let subject = coursesList[i].subject;
    let title = coursesList[i].title;
    let numReviews = Math.floor(Math.random() * 15) + 1;

    db.Course.create({
      number: num,
      subject: subject,
      title: title,
      rating: 0,
      difficulty: 0,
      number_of_reviews: 0,
      hours_1_4: 0,
      hours_5_9: 0,
      hours_10_14: 0,
      hours_15_19: 0,
      hours_20: 0
    });

    // randomly select prof and term
    for (let k = 0; k < numReviews; k++) {
      let reviewIndex = Math.floor(Math.random() * reviewsList.length); // [0, length)
      let termsIndex = Math.floor(Math.random() * termsList.length);
      let profs = coursesList[i].profs;
      let profsIndex = Math.floor(Math.random() * profs.length);
      let rating = Math.floor(Math.random() * 5) + 1;
      let difficulty = Math.floor(Math.random() * 5) + 1; // [1, 6)
      let hours = hoursList[Math.floor(Math.random() * hoursList.length)]

      db.Review.create({
        review: reviewsList[reviewIndex],
        term: termsList[termsIndex],
        course: i + 1,
        professor: profs[profsIndex],
        user: null,
        hours: hours,
        difficulty: difficulty,
        rating: rating
      });
    }

    db.Comment.create({
      course: i + 1,
      user: 1,
      comment: commentsList[Math.floor(Math.random() * commentsList.length)]
    });
  }
};
