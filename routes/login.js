const express = require('express');
const router = express.Router();
const controller  = require('../controller/common/authenticationController')

router.post('/login',controller.login);

module.exports  = router;