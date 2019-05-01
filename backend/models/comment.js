module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
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
};

/// check index.js for actual models being used
