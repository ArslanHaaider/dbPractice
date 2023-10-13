let express = require('express');
let router = express.Router();
let studentController = require('../controller/students/studentController');
router.post('/createStudent',studentController.creatStudent)

module.exports = router;