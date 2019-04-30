module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define("Course", {
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
};
