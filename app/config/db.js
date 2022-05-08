/*____mongo db connection_____*/


/*____importing mogooose____*/
const mongoose = require("mongoose")


/*____mongoDB Credentials For connection_______*/
const Credentials = "mongodb+srv://holosuit:Holosuit!123@cluster0.2pkpn.mongodb.net/Divpro"



/*______making connection_____*/

const connectToMongoDB = async () =>{
    try{
        mongoose.connect(Credentials)

        console.log("DB is connected....")

    } catch (err) {

        console.error(err.message)

        process.exit(1);
    }
}


/*___exporting the connection_____*/

module.exports = connectToMongoDB


