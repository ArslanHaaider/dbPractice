const dataTypes = require('sequelize');
const sequelize = require('../../../common/dbconnection');

const teacher = sequelize.define('teacher',{
    id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:dataTypes.INTEGER
    },
    experienceYears:{
        allowNull:false,
        type:dataTypes.INTEGER,
    },
    Courses:{
        allowNull:false,
        type:dataTypes.STRING,
    }
},{
    timestamps:true,
    paranoid:true,
    sequelize,
    modelName:"Teacher"
})

module.exports = teacher;