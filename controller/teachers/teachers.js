const teacherService = require('../../services/teacher')
module.exports = {
    addTeacher :async (req,res) => {
      const {firstName,lastName,email,phoneNUmbers, ...Teacher} = req.body
      // console.log({firstName:firstName,lastName:lastName,email:email,phoneNUmbers:phoneNUmbers});
      const creteUser = await userController.createUserHelper({firstName:firstName,lastName:lastName,email:email,phoneNUmbers:phoneNUmbers});
      let courseArray =  Student.Courses.split(",");
      let courseAllowedArray = []
      console.log(courseArray);
      async function processCourses(courseArray) {
          let courseAllowed = "";
          for (const element of courseArray) {
            // console.log("Printing the course name");
            // console.log(element);
            try {
              const course = await models.courses.findOne({ where: { coureName: element } });
        
              if (course) {
                // console.log("Printing the course name if it exists");
                // console.log(course.dataValues.coureName);
                courseAllowedArray.push(course.dataValues.coureName);
                courseAllowed += course.dataValues.coureName + ",";
                // console.log("Printing the allowed courses");
                // console.log(courseAllowed);
              } else {
                console.log(`${element} is not a registered course in the database`);
              }
            } catch (error) {
              console.error("Error querying for courses:", error);
            }
          }
        
          return courseAllowed.slice(0, -1); // Remove the trailing comma
        }
        
        // Call the function and use the result to create the student instance
        const courseAllowed = await processCourses(courseArray);
      const createTeacher = await teacherService.createTeacher({userID:creteUser.id,experienceYears:Teacher.experienceYears,Courses:courseAllowed});

      res.send(createTeacher);
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