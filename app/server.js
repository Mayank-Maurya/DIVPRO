const express=require('express')
const path=require('path')
const http=require('http')
const app=express()
const server=http.createServer(app)
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo');
const User = require("./models/Users")

const port=process.env.PORT || 5001;

const publicdirectorypath=path.join(__dirname,'../views')
// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
global.tempUID = 0


app.use(cookieParser());
app.use(express.static(publicdirectorypath))
app.use(express.json({extended: false}))
app.use(express.urlencoded({extended: false}))


 /*__getting db connection from db.js__*/

 const connectToDB = require("./config/db");

 /*___connecting DB_____*/
 connectToDB();

 app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false,
    store: MongoStore.create({mongoUrl: mongoose.connection._connectionString})
}));



app.use('/auth',require('./routes/Auth'),()=>{console.log('auth hitted')})

app.get('/',async (req,res)=>{
    console.log(req.query.username)
    console.log(req.session)
    
    let user = await User.findOne({username: req.session.userid})
    console.log(user)
    if(user.LeetcodeHandle || user.CodeChefHandle || user.CodeForcesHandle || user.GithubHandle)
    {
        if(req.session.user){
            if(!req.query.username)
            {
                res.redirect("/"+"?username="+req.session.userid)
            }else
            res.sendFile('Dashboard.html', { root: publicdirectorypath })
        }else
         res.sendFile('LoginSignup.html',{ root: publicdirectorypath })
    }else{
        res.sendFile('UserDetaills.html',{ root: publicdirectorypath })
    }
    
})


app.get('/login',(req,res)=>{
    console.log(req.session.userid)
    if(req.session.userid)
        res.redirect("/"+"?username="+req.session.userid)
    else
    res.sendFile('LoginSignup.html', { root: publicdirectorypath })
})




// this is the command we use to start the server
server.listen(port,()=>{
	console.log('server is running....')
})