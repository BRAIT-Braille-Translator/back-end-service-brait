const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const controller = require('../controllers')
const middleware = require("../middlewares")


router.get("/",controller.testController.getHelloWorld)


router.post("/signup",[middleware.authMiddleware.checkDuplicateUserUsername,middleware.authMiddleware.checkDuplicateUserEmail],controller.authController.signup)
router.post("/login",controller.authController.login)
router.get("/test/auth",  [middleware.jwtMiddleware.verifyToken],controller.testController.getHelloWorld)


module.exports = router;

