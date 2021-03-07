/*
============================================
; Title:  EMS 
; Author: Perry Fulfs
; Date:   28 February 2019
; Description: EJS layouts / employee
;===========================================
*/

// required statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//employee scheema
let EmployeeSchema = new Schema({
    name:{type:String,required:true},
 
})

//exporting model 
module.exports= mongoose.model('Employee', EmployeeSchema)