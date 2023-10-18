const {models} = require('../../models/defination/index');
module.exports = {
    teacherCourse : async (teacherId,CourseId) => {
        const updateJunction = await models.enrollTeacher.create({teacherId:teacherId,courseId:CourseId})
        return "junction updated for teacherCourse"   

    },
    studentCourse : async (studentId,CourseId) => {
        const updateJunction = await models.enrollStudent.create({StudentId:studentId,courseId:CourseId})  
        return "junction updated for studentCourse" 
    }
}