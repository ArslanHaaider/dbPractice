const dataTypes = require('sequelize');
const sequelize = require('../../../common/dbconnection');

const Course = sequelize.define('courses',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:dataTypes.INTEGER,
    },
    coureName:{
        allowNull:false,
        type:dataTypes.STRING,
        unique:true,
    },
    noOfStudents:{
        allowNull:true,
        type:dataTypes.INTEGER,
    }
},{
    timestamps:true,
    sequelize,
    paranoid:true,
});

module.exports =Course;