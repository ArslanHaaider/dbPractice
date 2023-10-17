const {models} = require('../models/defination/index');
module.exports =  {
    createTeacher :(data) => {
        const teacher = models.teacher.create(data);
        return teacher;
    }
}