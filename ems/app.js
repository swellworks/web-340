// <%- include('header') -%>

// <%- include('navbar') -%>

// <%- include('footer') -%>

// <%- include('scripts') -%>


// <!-- Scripts -->

var express = require("express");

var http = require("http");

var logger = require("morgan");

var helmet = require("helmet");

var path = require("path");

// initialize express

var app = express();

// use statements

app.use(logger("short"));

app.use(helmet.xssFilter());

// set statements

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

// http calls

// index page

// app.get("/", function(req, res) {
//     res.render("index", {
//         title: "HOME PAGE"
//     });
// });

app.get("/", function(req, res) {

    res.render("index", {

        message: "XSS Prevention Example"

    });

});

// list page
app.get("/list", function(req, res) {
    res.render('list.ejs', {
        title: "LIST PAGE"
    });
});

// new page
app.get('/new', function(req, res) {
    res.render('new.ejs', {
        title: "NEW PAGE"
    });
});

// create/start Node server

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");

});