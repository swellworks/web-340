// required

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// define the fruitSchema

var fruitSchema = new Schema({

    name: String

});

// define the fruit model

var Fruit = mongoose.model("Fruit", fruitSchema);

// expose the fruit to calling files

module.exports = Fruit;

Using the Model

var express = require("express");

var http = require("http");

var mongoose = require("mongoose");


var logger = require("morgan");


var Fruit = require("./models/fruit");

// mLab connection

var mongoDB = "<mLab connection string>";

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

var fruit = new Fruit({

    name: "Apple"

});

// create server

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});