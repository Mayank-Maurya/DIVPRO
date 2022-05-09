const express=require('express')
const path=require('path')
const http=require('http')
const app=express()
const server=http.createServer(app)

const port=process.env.PORT || 5001;

const publicdirectorypath=path.join(__dirname,'../views')

// it contains the static page
app.use(express.static(publicdirectorypath))

 /*__getting db connection from db.js__*/

 const connectToDB = require("./config/db");
 /*___connecting DB_____*/
 connectToDB();

 app.use(express.json({extended: false}))
app.use('/auth',require('./routes/Auth'),()=>{console.log('auth hitted')})

app.get('/',(req,res)=>{
res.sendFile('index.html', { root: publicdirectorypath })
})

app.get('/login',(req,res)=>{
    res.sendFile('LoginSignup.html', { root: publicdirectorypath })
})



// this is the command we use to start the server
server.listen(port,()=>{
	console.log('server is running....')
})