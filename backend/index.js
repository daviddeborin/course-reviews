var Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./course_review.db"
});

sequelize.authenticate().then(
  function(err) {
    console.log("Connection to db has been established successfully.");
  },
  function(err) {
    console.log("Unable to connect to the database:", err);
  }
);

var Course = sequelize.define("Course", {
  number: Sequelize.TEXT,
  subject: Sequelize.TEXT,
  title: Sequelize.TEXT,
  rating: Sequelize.INTEGER,
  difficulty: Sequelize.INTEGER,
  number_of_reviews: Sequelize.INTEGER,
  hours_1_4: Sequelize.INTEGER,
  hours_5_9: Sequelize.INTEGER,
  hours_10_14: Sequelize.INTEGER,
  hours_15_19: Sequelize.INTEGER,
  hours_20: Sequelize.INTEGER
});

var User = sequelize.define("User", {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

var Comment = sequelize.define("Comment", {
  course: {
    type: Sequelize.INTEGER,
    references: {
      model: Course,
      key: "id"
    }
  },
  user: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: "id"
    }
  },
  comment: Sequelize.TEXT
});

var Review = sequelize.define("Review", {
  review: Sequelize.TEXT,
  course: {
    type: Sequelize.INTEGER,
    references: {
      model: Course,
      key: "id"
    }
  },
  professor: Sequelize.TEXT,
  date_posted: Sequelize.DATE,
  user: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: "id"
    }
  },
  hours: Sequelize.TEXT,
  difficulty: Sequelize.INTEGER,
  rating: Sequelize.INTEGER
});

sequelize.sync({ force: true }).then(
  function(err) {
    console.log("sql has been synced");
  },
  function(err) {
    console.log("An error occurred while creating the table:", err);
  }
);

// var Course = sequelize.define('User', {
//     username: Sequelize.STRING,
//     password: Sequelize.STRING
// });

// const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: './database.sqlite'
// })

// sequelize.authenticate();

// // Models
// var Subject = sequelize.define('subject', {
//     name : {
//         type: Sequelize.STRING,
//         allowNull : false
//     },
//     courses : Sequelize.ARRAY,
// })

// var Course = sequelize.define('course', {
//     number : Sequelize.NUMBER,
//     description : Sequelize.STRING
// })

// sequelize.sync({force: true});

// module.exports = {Subject : Subject, Course : Course};
