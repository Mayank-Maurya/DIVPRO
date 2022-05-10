const express = require("express")
const { route } = require("express/lib/application")
const router = express.Router()

const { register,login, update } = require("../Controllers/AuthController")

router.post("/register",register,()=>{console.log("register happened")})
router.post("/login",login,()=>{console.log("login happened")})
router.post("/update",update,()=>{console.log("update happened")})
module.exports = router
