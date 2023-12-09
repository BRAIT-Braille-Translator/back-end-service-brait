const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const controller = require('../controllers')


router.get('/',controller.testController.getHelloWorld)


module.exports = router;

