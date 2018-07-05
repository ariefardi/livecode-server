var express = require('express');
var router = express.Router();
const userController = require('../controllers/user-controller')

/* GET users listing. */
router.get('/', userController.getUsers)
router.post('/register'. userController.register)

module.exports = router;
