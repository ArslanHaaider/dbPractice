const {models} =  require('../models/defination/index')
module.exports = {
    createCourse :async (data) =>{
      const result = await models.courses.create(data);
      return result
    },
    updateCourse:async (courseId ,data) =>{
      try{
          const course =await models.courses.findOne({where:{id:courseId }})
          console.log(data);
          if(course){
              models.Student.update({experienceYears:data.experienceYears,Courses:data.Courses},{where:{id:courseId}})
            const course =await models.courses.findOne({where:{id:courseId }})

              return course;
          }
      }catch(err){
          console.log("no such Id exist for it to modiyg")
          return "No such such student find that respective id"
      }

  },
  getAllCourse:async() =>{
      const Courses = await models.courses.findAll();
      if (Courses){
          return Courses
      }else{
          return "Can't find or asynchronus"
      }
  },
  deleteCourse:async (courseId)=>{
     const deleted = await models.courses.destroy({where:{id:courseId}})
      if(deleted>0){
          console.log("The number of deleted rows is " + deleted)
          return "row deleted"
      }
      else{
          return "couldn't find the specific student"
      }
  } 
}