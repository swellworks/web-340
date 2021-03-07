// required

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// define the employeeSchema

var employeeSchema = new Schema({

    name: String

});

// define the employee model

var Employee = mongoose.model("Employee", employeeSchema);

// expose the employee to calling files

module.exports = Employee;

// Using the Model

var express = require("express");

var http = require("http");

var mongoose = require("mongoose");

var logger = require("morgan");


var Employee = require("ems/models/employee.js");

// mLab connection

var mongoDB = "mongodb+srv://swellworks:8tr@ck@cluster0.nclbl.mongodb.net/https://cloud.mongodb.com/v2/6024aa973e554d7cd8fe6951#metrics/host/4679c71ff2c0f04a646030a40920ec2e/status?retryWrites=true&w=majority";

mongoose.connect(mongoDB, {

    useMongoClient: true

});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function() {

    console.log("Application connected to mLab MongoDB instance");

});

// application

var app = express();

app.use(logger("short"));

// model

var employee = new Employee({

    firstName: "Doug",
    lastName: "Giblets"

});

// create server

http.createServer(app).listen(3003, function() {

    console.log("Application started on port 3003!");

});