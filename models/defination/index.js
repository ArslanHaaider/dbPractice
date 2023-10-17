let sequelize = require('../../common/dbconnection');
let user = require('./user/users');
let student = require('./student/student');
let courses = require('./courses/courses')
let teacher = require('./teacher/teacher')

user.hasOne(student,{onUpdate:"CASCADE",onDelete:"CASCADE",foreignKey:{name:'userID',allowNull:false,unique:true}})
student.belongsTo(user,{onUpdate:"CASCADE",onDelete:"CASCADE",foreignKey:{name:'userID',allowNull:false,unique:true}})
student.belongsToMany(courses,{through:'enrollStudent',onUpdate:"CASCADE"});
courses.belongsToMany(student,{through:'enrollStudent',onUpdate:"CASCADE"});
teacher.belongsToMany(courses,{through:'enrollTeacher',onUpdate:"CASCADE"});
courses.belongsToMany(teacher,{through:'enrollTeacher',onUpdate:"CASCADE"});
const models =sequelize.models;
console.log(models);
const db = {};
db.sequelize = sequelize;
module.exports = {db,models}