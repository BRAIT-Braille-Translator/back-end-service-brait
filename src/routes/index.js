const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const controller = require('../controllers')


router.get('/',controller.testController.getHelloWorld)


router.post('/signin',controller.authController.signup)

module.exports = router;

