const userController = require('../resources/resources')
const  {models} = require('../../models/defination/index');
const studentService = require('../../services/studentService')
module.exports = {
    creatStudent:async (req,res) =>{
        const {firstName,lastName,email,phoneNUmbers, ...Student} = req.body
        console.log({firstName:firstName,lastName:lastName,email:email,phoneNUmbers:phoneNUmbers});
        const creteUser = await userController.createResourceHelp({firstName:firstName,lastName:lastName,email:email,phoneNUmbers:phoneNUmbers});
        console.log("printing the returned creteUser value:")
        console.log(creteUser.id);
        const creatStudent = await studentService.createStudent({userID:creteUser.id,department:Student.department,Semester:Student.Semester,rollNumber:Student.rollNumber});
        res.send(creatStudent);
    }
}