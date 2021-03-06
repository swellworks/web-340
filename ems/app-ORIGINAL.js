
// <!-- Scripts -->

var express = require("express");

var http = require("http");

var logger = require("morgan");

var helmet = require("helmet");

var path = require("path");

var bodyParser = require("body-parser");

var cookieParser = require("cookie-parser");

var csrf = require("csurf");

// setup csrf protection

var csrfProtection = csrf({cookie: true});

// initialize express

var app = express();

// use statements

app.use(logger("short"));

app.use(helmet.xssFilter());

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


// set statements

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");


// routing 

app.get("/", function(req, res) {

    res.render("index", {

        message: "XSS Prevention Example"

    });

});

app.post("/process", function(req, res) {

    // console.log(request.body.txtName);
 
    if (!req.body.txtName) {
 
        res.status(400).send("Entries must have a name");
 
        return;
 
    }

// app.post("/process", function(req, res) {
//     console.log(req.body.txtName);
//     res.redirect("/");
// });
// OLD PROCESS - REFERENCE

// list page

app.get("/list", function(req, res) {
    Employee.find({}, function(error, employees) {
       if (error) throw error;
       res.render("list", {
           title: "Employee List",
           employees: employees
       });
    });
});

// app.get("/list", function(req, res) {
//     res.render('list.ejs', {
//         title: "LIST PAGE"
//     });
// });
// OLD LIST - REFERENCE

// mongoose find all example

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
