// routes for URLs starting with /users

'use strict';
var express = require('express');
var router = express.Router();
const ctrl_users = require('../controllers/ctrl_users');

/* GET users listing. */
router.get('/', ctrl_users.homePage);

module.exports = router;
