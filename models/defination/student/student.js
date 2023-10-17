const dataTypes = require('sequelize');
let sequelize = require("../../../common/dbconnection");    
// const database = require('../../../common/dbconnection');
const student = sequelize.define('Student',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:dataTypes.INTEGER,
    },
    department:{
        allowNull:true,
        type:dataTypes.STRING,
    },
    Semester:{
        allowNull:true,
        type:dataTypes.INTEGER,
    },
    rollNumber:{
        unique:true,
        allowNull:false,
        type:dataTypes.STRING
    },
    Courses:{
        allowNull:true,
        type:dataTypes.STRING
    }
},{
    timestamps:true,
    paranoid:true,
    sequelize,
})
module.exports= student;
