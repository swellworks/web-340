// <%- include('header') -%>

// <%- include('navbar') -%>

// <%- include('footer') -%>

// <%- include('scripts') -%>


// <!-- Scripts -->

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.use(logger("short"));

app.set("view engine", "ejs");

// index page
app.get("/", function(req, res) {
    res.render("index", {
        title: "HOME PAGE"
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

http.createServer(app).listen(3200, function() {
    console.log("Application started on port 3200!");
});