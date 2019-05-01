module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: Sequelize.STRING,
    password: Sequelize.STRING
  });
};

/// check index.js for actual models being used
