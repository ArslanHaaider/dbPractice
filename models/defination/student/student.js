const dataTypes = require('sequelize');
let sequelize = require("../../../common/dbconnection");    
const database = require('../../../common/dbconnection');
const student = sequelize.define('student',{
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
},{
    timestamps:true,
    paranoid:true,
    sequelize,
    modelName:"student"
})
module.exports= student;
