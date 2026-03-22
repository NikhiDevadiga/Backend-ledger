const mongoose = require("mongoose")

const connectDB = () =>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Database connected");
    })
    .catch((err)=>{
        console.log("failed to connect database",err);
    })
}

module.exports = connectDB;
