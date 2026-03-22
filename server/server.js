require("dotenv").config();

const connectDB = require("./src/config/db.js")
connectDB();

const app = require("./src/app.js");

app.listen(3000,()=>{
    console.log("server started on port 3000");
})
