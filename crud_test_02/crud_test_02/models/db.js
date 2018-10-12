// TO DO:    make mongoose/mongodb connections and import schema

const mongoose = require('mongoose');

const dbURI = "mongodb://localhost:27017/test2";



mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
    console.log("Mongoose connected succesffully!");
});


mongoose.connection.on('error', (error) => {
    console.log("Mongoose error: " + error);
});


mongoose.connection.on('disconnected', () => {
    console.log("Mongoose disconnected!");
});


require('./usermodel');