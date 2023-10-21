const dataTypes = require('sequelize');
let sequelize = require("../../../common/dbconnection");    
// const database = require('../../../common/dbconnection');
const user = sequelize.define('user',{
    
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:dataTypes.INTEGER,

    },
    firstName:{
        allowNull:true,
        type:dataTypes.STRING,
    },
    lastName:{
        allowNull:true,
        type:dataTypes.STRING,
    },
    email:{
        unique:true,
        allowNull:false,
        type:dataTypes.STRING,
        validate:{isEmail:true},
    },
    phoneNUmbers:{
        unique:true,    
        allowNull:false,
        type:dataTypes.STRING
    },
},{
    timestamps:true,
    paranoid:true,
    sequelize,
    modelName:"User"
})
module.exports= user;
