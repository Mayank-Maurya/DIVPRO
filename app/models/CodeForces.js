const mongoose = require("mongoose")


const CodeForcesSchema = new mongoose.Schema({
    _id:{
        type:String
    },
})


/*___exporting the schema so that we can use it anywhere to access user*/
module.exports = mongoose.model("CodeForces",CodeForcesSchema)
