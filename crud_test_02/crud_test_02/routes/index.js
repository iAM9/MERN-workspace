// routes for URLs starting with / {homepage}

'use strict';
var express = require('express');
var router = express.Router();
const ctrl_index = require('../controllers/ctrl_index');

/* GET home page. */
router.get('/', ctrl_index.homePage);

module.exports = router;
