// import  express  from "express";
// const express = require("express");
const express  = require('express')
// import cors from "cors"
const cors = require("cors");
// import connectionDatabase from "./db/connectionDatabase.js";
const connectionDatabase = require("./db/connectionDatabase.js");

// import formModel from "./db/formSchema.js";
const formModel = require("./db/formSchema.js");

// import dotenv from "dotenv"
const dotenv = require("dotenv");




const app = express()
app.use(cors())
dotenv.config();

const PORT = 8080;
connectionDatabase(process.env.DataBase_URL)
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const submitController = async (req,res)=>{
    // console.log(req.query)
    // console.log("form handleing")
    // console.log(req.body)
    let doc = await new formModel({
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        password:req.body.password,
        gender:req.body.gender,
        age:req.body.age,
        check:req.body.checkbox
    })
    await doc.save();
    res.send({
        result:"Your information is saved in database."
    })

}
const getData = async (req,res)=>{
    let respone = await formModel.find()
    res.send(respone)


}

app.get("/",(req,res)=>{
   res.send(  "Home page")
})

app.post("/form",submitController)
app.get("/getdata",getData)



app.listen(PORT,()=>{
    console.log("backend working")
})

