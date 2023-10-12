let sequelize = require('../../common/dbconnection');
let user = require('./user/users');
let student = require('./student/student');

user.hasOne(student,{onDelete:"CASCADE",foreignKey:{name:'userID',allowNull:false,unique:true}})
student.belongsTo(user,{onDelete:"CASCADE",foreignKey:{name:'userID',allowNull:false,unique:true}})

const models =sequelize.models;
console.log(models);
const db = {};
db.sequelize = sequelize;
module.exports = {db,models}