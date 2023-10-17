const teacherService = require('../../services/teacher')
module.exports = {
    addTeacher :(req,res) => {
        const teacher = teacherService.createTeacher(req.body);
        res.send(teacher);
    }
}