var path = require("path");
'use strict';
var fs = require("fs");
console.log('Hello world');


fs.mkdir(__dirname + "yolo", function (err) {
    if (fs.exists(__dirname + "yolo"))
        console.log(err);
    else
        console.log("Direcotr created successfull!");
});