const express=require('express')
const path=require('path')
const http=require('http')
const app=express()
const server=http.createServer(app)
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

const port=process.env.PORT || 5001;

const publicdirectorypath=path.join(__dirname,'../views')
// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));



app.use(cookieParser());
app.use(express.static(publicdirectorypath))
app.use(express.json({extended: false}))
app.use(express.urlencoded({extended: false}))

global.session

 /*__getting db connection from db.js__*/



 const connectToDB = require("./config/db");
 /*___connecting DB_____*/
 connectToDB();


app.use('/auth',require('./routes/Auth'),()=>{console.log('auth hitted')})

// app.get('/',(req,res)=>{
//     console.log("dahsboard happened")
//     session = req.session
//     if(session.userid){
//         //res.sendFile('UserDetaills.html', { root: publicdirectorypath })
//     }
//     //res.sendFile('LoginSignup.html',{ root: publicdirectorypath })

// })

app.get('/login',(req,res)=>{
    
    res.sendFile('LoginSignup.html', { root: publicdirectorypath })
})



// this is the command we use to start the server
server.listen(port,()=>{
	console.log('server is running....')
})