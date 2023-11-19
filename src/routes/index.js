const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const controller = require('../controllers/index')


router.get('/',controller.getHelloWorld)

module.exports = router;

