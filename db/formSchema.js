// import mongoose from "mongoose";
const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password: String,
    gender:String,
    age:Number,
    check:Boolean
})

const formModel = mongoose.model("formUser",formSchema)

// export default formModel
module.exports = formModel
