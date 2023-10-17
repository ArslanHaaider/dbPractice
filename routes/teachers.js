const express = require('express');
const router = express.Router();
const teacherController = require('../controller/teachers/teachers')
router.post('/addTeacher',teacherController.addTeacher);
module.exports = router;
