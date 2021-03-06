var Sequelize = require("sequelize");

// Establish the db connection
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./course_review.db"
});

sequelize.authenticate().then(
  function(err) {
    console.log("Connection to db has been established successfully.");
  },
  function(err) { // this parameter is the .catch()
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
}, {
  classMethods: {
    validPassword : function(password, user) {
      return (user.password === password);
    }
  }
});

var Comment = sequelize.define("Comment", {
  course: {
    type: Sequelize.INTEGER,
    references: {
      model: Course, // reference to Course Model
      key: "id" // the column name in the Course Model
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
  term: Sequelize.TEXT,
  course: {
    type: Sequelize.INTEGER,
    references: {
      model: Course,
      key: "id"
    }
  },
  professor: Sequelize.TEXT,
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

const db = {};

db.Sequelize = Sequelize; // Library as a whole
db.sequelize = sequelize; // actual connection setup

db.Course = Course;
db.Comment = Comment;
db.Review = Review;
db.User = User;

// force true deletes everything on startup
sequelize.sync({ force: true }).then(
  function(err) {
    console.log("sql has been synced");
    // 
    require("./dbfill")(db);
  },
  function(err) {
    console.log("An error occurred while creating the table:", err);
  }
);

module.exports = db;
