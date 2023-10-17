const {models} = require('../models/defination/index')
module.exports ={
    createStudent:async (data) =>{
     const result = await  models.Student.create(data);
     return result
    },
    updateStudent:async (studentId ,data) =>{
        try{
            const Student =await models.Student.findOne({where:{id:studentId }})
            console.log(data);
            if(Student){
              await models.Student.update({department:data.department,Semester:data.Semester,rollNumber:data.rollNumber},{where:{id:studentId}})
            const Student =await models.Student.findOne({where:{id:studentId }})
            return Student;
            }
        }catch(err){
            console.log("no such Id exist for it to modiyg")
            return "No such such student find that respective id"
        }

    },
    getAllStudents:async() =>{
        const Students = await models.Student.findAll();
        if (Students){
            return Students
        }else{
            return "Can't find or asynchronus"
        }
    },
    deleteStudent:async (studentId)=>{
       const deleted = await models.Student.destroy({where:{id:studentId}})
        if(deleted>0){
            console.log("The number of deleted rows is " + deleted)
            return "row deleted"
        }
        else{
            return "couldn't find the specific student"
        }
    } 
}