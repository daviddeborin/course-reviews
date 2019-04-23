
var Subject = sequelize.define('subject', {
        name : {
            type: Sequelize.STRING,
            allowNull : false
        },
        courses : Sequelize.ARRAY,
})

