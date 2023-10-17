// const { models } = require('../../models/defination');
const courseService = require('../../services/courses');

module.exports = {
    createCourse: async (req,res) =>{
        const newCourse = await courseService.createCourse(req.body);
        res.send(newCourse);
    },
    updateCourse : async (req,res) =>{
        const result = await courseService.updateCourse(req.params.id,req.body);
        res.send(result);
      },
      getAllCourse: async(req,res) =>{
        const courses = await courseService.getAllCourse();
        res.send(courses);
      },
      deleteCourse: async (req,res)=>{
        const deleted =  await courseService.deleteCourse(req.params.id);
        res.send(deleted);
      }
}