const express = require('express');
const router = express.Router();
const courseController = require('../controller/courses/courses');
router.get('/',courseController.getAllCourse)
router.post('/createCourse',courseController.createCourse);
router.delete('/deleteCourse/:id', courseController.deleteCourse);
router.put('/updateCourse/:id', courseController.updateCourse);
module.exports = router;
