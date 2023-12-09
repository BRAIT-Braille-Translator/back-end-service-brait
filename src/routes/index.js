const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const controller = require('../controllers')
const middleware = require("../middlewares")


router.get('/',controller.testController.getHelloWorld)


router.post('/signin',[middleware.authMiddleware.checkDuplicateUser],controller.authController.signup)

module.exports = router;

