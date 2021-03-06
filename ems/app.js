// variable app scripts

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

// START EJS PAGES
// ----------------------------------------------

// index page
app.get("/", function (request, response) {

    response.render("index", {

        title: "Home page"

    });

});

// list page
app.get("list", function(req, res) {
    Employee.find({}, function(error, employees) {
       if (error) throw error;
       res.render("list", {
           title: "Employee List",
           employees: employees
       });
    });
});

http.createServer(app).listen(3002, function() {

    console.log("Application started on port 3002!");

});