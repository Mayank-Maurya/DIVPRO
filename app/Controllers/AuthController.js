const { response } = require("express")
const { request } = require("express")
const bcrypt = require("bcryptjs")
const User = require("../models/Users")

exports.register = async (request, response) => {
    
    const { username,email,password } = request.body

    try {
        let user = await User.findOne({UserName: username.toLowerCase()})
        if(user)
           return response.status(422).send("username is already reg")

        let newUser = new User({
            UserName: username,
            email: email.toLowerCase().replace(/\s+/,""),
            password,
        })

        //hashing the password

        const hash = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(username+password,hash)


        //save the user
        await newUser.save()

        //send the response to server

        response.status(201).send(response.statusCode)

    } catch (err){

        console.error(err.message)
        response.status(500).send("server error")

    }
    
}
