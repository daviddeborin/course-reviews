var Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
})

sequelize.authenticate();

// Models
var Subject = sequelize.define('subject', {
    name : {
        type: Sequelize.STRING,
        allowNull : false
    },
    courses : Sequelize.ARRAY,
})

var Course = sequelize.define('course', {
    number : Sequelize.NUMBER,
    description : Sequelize.STRING
})

sequelize.sync({force: true});

module.exports = {Subject : Subject, Course : Course};