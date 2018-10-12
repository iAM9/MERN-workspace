// routes for URLs starting with /api/users {CRUD}


'use strict';
var express = require('express');
var router = express.Router();
const ctrl_usersApi = require('../controllers/ctrl_usersApi');

/* GET users listing. */

//router.get('/', function (req, res) {
//    res.send("from api!!");
//});

router.post('/users/', ctrl_usersApi.addUser);


module.exports = router;
