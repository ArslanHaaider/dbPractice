const {models} = require('../models/defination/index');
module.exports =  {
    createTeacher :(data) => {
        const teacher = models.teacher.create(data);
        return teacher;
    },
    updateTeacher:async (teacherId ,data) =>{
        try{
            const teacher =await models.teacher.findOne({where:{id:teacherId }})
            console.log(data);
            if(teacher){
                models.Student.update({experienceYears:data.experienceYears,Courses:data.Courses},{where:{id:teacherId}})
                const teacher =await models.teacher.findOne({where:{id:teacherId }})
                return teacher;
            }
        }catch(err){
            console.log("no such Id exist for it to modiyg")
            return "No such such student find that respective id"
        }

    },
    getAllTeacher:async() =>{
        const Students = await models.Student.findAll();
        if (Students){
            return Students
        }else{
            return "Can't find or asynchronus"
        }
    },
    deleteTeacher:async (teacherId)=>{
       const deleted = await models.teacher.destroy({where:{id:teacherId}})
        if(deleted>0){
            console.log("The number of deleted rows is " + deleted)
            return "row deleted"
        }
        else{
            return "couldn't find the specific student"
        }
    } 
}