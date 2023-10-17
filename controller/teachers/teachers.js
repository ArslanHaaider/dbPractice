const teacherService = require('../../services/teacher')
module.exports = {
    addTeacher :(req,res) => {
        const teacher = teacherService.createTeacher(req.body);
        res.send(teacher);
    },
    updateTeacher : async (req,res) =>{
        const result = await teacherService.updateTeacher(req.params.id,req.body);
        res.send(result);
      },
      getAllTeacher: async(req,res) =>{
        const students = await teacherService.getAllTeacher();
        res.send(students);
      },
      deleteTeacher: async (req,res)=>{
        const deleted =  await teacherService.deleteTeacher(req.params.id);
        res.send(deleted);
      }
}