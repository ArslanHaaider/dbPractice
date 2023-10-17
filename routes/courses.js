const express = require('express');
const router = express.Router();
const courseController = require('../controller/courses/courses');
router.post('/createCourse',courseController.createCourse);
module.exports = router;
