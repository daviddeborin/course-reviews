module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define("Review", {
    review: Sequelize.TEXT,
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
};

/// check index.js for actual models being used
