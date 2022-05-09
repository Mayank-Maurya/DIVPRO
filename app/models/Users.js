const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 255,
    },
    password: {
        type: String,
        minlength: 5,
        maxlength: 255,
    },
    email:{
        type:String
    },
    LeetcodeHandle:{
        type: String,
        unique: true,
        default:null
    },
    CodeForcesHandle:{
        type: String,
        unique: true,
        default:null
    },
    CodeChefHandle:{
        type: String,
        unique: true,
        default:null
    },
    GithubHandle:{
        type: String,
        unique: true,
        default:null
    }
    
})


/*___exporting the schema so that we can use it anywhere to access user*/
module.exports = mongoose.model("User",userSchema)
