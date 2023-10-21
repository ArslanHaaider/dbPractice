const userController = require('../users/users')
const  {models} = require('../../models/defination/index');
const studentService = require('../../services/studentService');
const { where } = require('sequelize');
const junction = require('../junctionController/junction');
module.exports = {
    creatStudent:async (req,res) =>{
        const {firstName,lastName,email,phoneNUmbers, ...Student} = req.body
        // console.log({firstName:firstName,lastName:lastName,email:email,phoneNUmbers:phoneNUmbers});
        const creteUser = await userController.createUserHelper({firstName:firstName,lastName:lastName,email:email,phoneNUmbers:phoneNUmbers});
        //Gonna check whether the course exist or not;
        let courseArray =  Student.Courses.split(",");
        let courseAllowedArray = []
        let courseAllowedObject = [];
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
                  courseAllowedObject.push(course);
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
          console.log(courseAllowedObject)
          // Call the function and use the result to create the student instance
          const courseAllowed = await processCourses(courseArray);
          
        //creating student instance
        const creatStudent = await studentService.createStudent({userID:creteUser.id,department:Student.department,Semester:Student.Semester,rollNumber:Student.rollNumber,Courses:courseAllowed});


        

        
        ///UPdateing Junction
        
        for(const value of courseAllowedObject){
          const updatee = await junction.studentCourse(creatStudent.id,value.id);
          return updatee
        }

        //Now trying to update student count
        for (const element of courseAllowedArray) {
          try {
            const course = await models.courses.findOne({ where: { coureName: element } });
        
            if (course) {
        
              // Update the noOfStudents attribute for the course
              await models.courses.update(
                { noOfStudents: course.noOfStudents + 1 },
                { where: { id: course.id } }
              );
              console.log('updated courses no of students by 1')
            }
          } catch (error) {
            console.error("Error processing course:", error);
          }
        }
        
        res.send(creatStudent);
    },
    updateStudent : async (req,res) =>{
      const result = await studentService.updateStudent(req.params.id,req.body);
      res.send(result);
    },
    getAllStudents: async(req,res) =>{
      const students = await studentService.getAllStudents();
      res.send(students);
    },
    deleteStudent: async (req,res)=>{
      const deleted =  await studentService.deleteStudent(req.params.id);
      res.send(deleted);
    }
}