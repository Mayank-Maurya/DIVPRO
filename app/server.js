const express = require("express")
const app = express()
/*__getting db connection from db.js__*/

const connectToDB = require("./config/db");

/*___connecting DB_____*/
connectToDB();

app.listen(5001,()=>{console.log("server is running")})