// const { models } = require('../../models/defination');
const courseService = require('../../services/courses');

module.exports = {
    createCourse: async (req,res) =>{
        const newCourse = await courseService.createCourse(req.body);
        res.send(newCourse);
    }
}