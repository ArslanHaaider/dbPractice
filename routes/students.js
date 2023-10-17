let express = require('express');
let router = express.Router();
let studentController = require('../controller/students/studentController');
router.post('/createStudent',studentController.creatStudent)
router.put('/updateStudent/:id',studentController.updateStudent);
router.delete('/deleteStudent/:id',studentController.deleteStudent);
router.get('/',studentController.getAllStudents);
module.exports = router;