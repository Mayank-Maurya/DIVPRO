const mongoose = require("mongoose")


const GitHubSchema = new mongoose.Schema({
    _id:{
        type:String
    },
})


/*___exporting the schema so that we can use it anywhere to access user*/
module.exports = mongoose.model("GitHub",GitHubSchema)
