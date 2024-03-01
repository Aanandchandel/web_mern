const mongoose = require("mongoose");
require("dotenv").config();



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});


const User = mongoose.model("User", userSchema);
module.exports = User;



// userSchema.methods.getAuthToken = async function() {
//     try {
//         const token = await jwt.sign({ _id: this._id,name:this.name }, key); // Using the key variable from environment
//         console.log(token); // Logging the generated token
// await this.save();
//         return token; // Returning the token
//     } catch (error) {
//         console.error("Error generating token:", error);
//         throw error; // Throwing error for error handling
//     }
// };