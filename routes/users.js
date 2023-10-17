let resources = require('../controller/users/users');
const express = require('express');
let router = express.Router();

router.get('/:id',resources.giveUser);
router.get('/', resources.getAllUser);
router.post('/createUser', resources.createUser);
router.delete('/deleteUser/:id', resources.deleteUser);
router.put('/updateUser/:id', resources.updateUser);
module.exports = router;