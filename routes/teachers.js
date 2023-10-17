const express = require('express');
const router = express.Router();
const teacherController = require('../controller/teachers/teachers')
router.get('/',teacherController.getAllTeacher);
router.post('/addTeacher',teacherController.addTeacher);
router.delete('/deleteTeacher/:id', teacherController.deleteTeacher);
router.put('/updateTeacher/:id', teacherController.updateTeacher);
module.exports = router;
