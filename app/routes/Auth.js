const express = require("express")
const { route } = require("express/lib/application")
const router = express.Router()

const { register,login } = require("../Controllers/AuthController")

router.post("/register",register,()=>{console.log("register happened")})
router.post("/login",login,()=>{console.log("login happened")})
module.exports = router
