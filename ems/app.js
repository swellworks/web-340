// require statements
var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var bodyParser = require("body-parser");

var cookieParser = require("cookie-parser");

var csrf = require("csurf");


// setup csrf protection
var csrfProtection = csrf({cookie: true});

// initialize express
var app = express();


// use statements
app.use(logger("short"));

app.use(bodyParser.urlencoded({

    extended: true

}));

app.use(cookieParser());

app.use(csrfProtection);

app.use(function(request, response, next) {

    var token = request.csrfToken();

    response.cookie('XSRF-TOKEN', token);

    response.locals.csrfToken = token;

    next();

});

// not sure if supposed to keep this one?
// app.use(helmet.xssFilter());


// set statements
app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");


// START EJS PAGES
// ----------------------------------------------

// index page
app.get("/", function(req, res) {
    res.render("index", {
        title: "Home Page",
        message: "New Employee Entry Page"
    });
});

app.post("/process", function(req, res) {
    console.log(req.body.txtName);
    res.redirect("/");

});


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

// create/start Node server
http.createServer(app).listen(3004, function() {
    console.log("Application started on port 3004!");
});