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
// app.get("/list", function(req, res) {
//     Employee.find({}, function(error, employees) {
//        if (error) throw error;
//        res.render("list", {
//            title: "Employee List",
//            employees: employees
//        });
//     });
// });

// list page
app.get('/list', function(req, res) {
    res.render('list.ejs', {
        title: "List Page",
        message: "List Page"
    });
});

// new page
app.get('/new', function(req, res) {
    res.render('new.ejs', {
        title: "New Page",
        message: "New Page"
    });
});

// view page
app.get('/view', function(req, res) {
    res.render('view.ejs', {
        title: "View Page",
        message: "View Page"
    });
});

http.createServer(app).listen(8002, function() {

    console.log("Application started on port 8002!");

});