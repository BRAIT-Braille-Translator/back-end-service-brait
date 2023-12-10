const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../config/braitapi.json')
const router = express.Router();
const controller = require('../controllers')
const middleware = require("../middlewares")



router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));


router.post("/auth/signup",[middleware.authMiddleware.checkDuplicateUserUsername,middleware.authMiddleware.checkDuplicateUserEmail],controller.authController.signup)
router.post("/auth/login",controller.authController.login)
router.get("/test/auth",  [middleware.jwtMiddleware.verifyToken],controller.testController.getHelloWorld)


module.exports = router;

