/*
============================================
; Title:  EMS 
; Author: Perry Fulfs
; Date:   28 February 2019
; Description: EJS layouts
;===========================================
*/

// require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var Employee = require("./models/employee");
var mongoose = require("mongoose");

// setup csrf protection
var csrfProtection = csrf({cookie: true});

// initialize express
var app = express();

//establish database connections
var mongoDB = "mongodb+srv://pfulfs:bLackB1rd@buwebdev-cluster-1.nclbl.mongodb.net/test";

mongoose.connect(mongoDB,{useNewUrlParser:true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function () {
    console.log("Application connected to MongoDB")
});


// use statements
app.use(logger("short"));
app.use(bodyParser.urlencoded({
    extended: true
    })
);
app.use(cookieParser());
app.use(csrfProtection);
app.use(function (request, response, next) {
    var token = request.csrfToken();
    response.cookie("XSRF-TOKEN", token);
    response.locals.csrfToken = token;
    next();
});
app.use(express.static(__dirname + '/public'));




//setting view engine
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', process.env.PORT || 8080);

//routing
// START EJS PAGES
// ----------------------------------------------

// rendering index page
app.get("/", function (req, res) {
    Employee.find({}, function (err, employees) {
        if (err) {
            console.log(err)
            throw err;
        } else {
            console.log(employees);
            res.render('index', {
                title: 'EMS|Home',
                employees: employees
            })
        }
    });
});

// rendering list page
app.get("/list", function (req, res) {
    Employee.find({}, function (error, employees) {
        if (error) throw error;
        res.render("list", {
            title: 'Employee List',
            employee: employees
        })
    })
})

// rendering new page
app.get("/new", function (req, res) {
    res.render("new", {
        title: 'EMS|New'
    });
});


// rendering view page
app.get("/view/:queryName", function (req, res) {
    var queryName = req.params['queryName']
     Employee.find({'name': queryName}, function (err, employees) {
         if (err) {
             console.log(err);
         } else {
             console.log(employees)
             if (employees.length > 0) {
                 res.render("view", {
                     title: 'EMS | View',
                     employee:employees
                 })
             } else {
                 res.redirect('/')
             }
         }
     })
 })

// app.get('/view', function(req, res) {
//     res.render('view.ejs', {
//         title: "View Page",
//         message: "View Page"
//     });
// });

// rendering post
app.post("/process", function (req, res) {
    //get requests data 
    const employeeName = req.body.txtName;
    console.log(employeeName)
    //employee model
    let employee = new Employee({
        name: employeeName
    });
    //save employee
    employee.save(function (err) {
        if (err) {
            console.log(err);
            throw err;
        } else {
            console.log(employeeName + " saved successfully!");
            res.redirect('/')
        }
    });

})

// create/start Node server
http.createServer(app).listen(3008, function() {
    console.log("Application started on port 3008!");
});