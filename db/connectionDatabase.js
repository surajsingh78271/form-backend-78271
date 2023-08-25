// import mongoose from "mongoose"
const mongoose = require("mongoose");

const connectionDatabase = async (DataBase_URL)=>{
    return await mongoose.connect(DataBase_URL,{
        dbName:"formDB",
        useNewUrlParser: true,
            useUnifiedTopology: true,
    }).then(()=>{
        console.log("database connected")
    })
    // .catch((error)=>{
    //     console.log(error)
    // })
}

// export default connectionDatabase
module.exports = connectionDatabase
