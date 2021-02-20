var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function (request, response) {

    response.render("index", {

        title: "Landing Page"

    });

});

app.get("/new", function (request, response) {

    response.render("new", {

        title: "New Page"

    });

});

http.createServer(app).listen(3300, function() {

    
    console.log("Application started on port 3300!");

});