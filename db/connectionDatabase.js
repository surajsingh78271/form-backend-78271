import mongoose from "mongoose"

const connectionDatabase = async (DataBase_URL)=>{
    return await mongoose.connect(DataBase_URL,{
        dbName:"formDB"   
    }).then(()=>{
        console.log("database connected")
    }).catch((error)=>{
        console.log(error)
    })
}

export default connectionDatabase