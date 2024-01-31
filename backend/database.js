//  mongodb-uri : mongodb+srv://harshithm2508:harshith25@paytm-clone.ldrrw17.mongodb.net/?retryWrites=true&w=majority

const mongoose = require("mongoose");
const { Schema } = require("zod");

//  Connecting to the databse 
mongoose.connect('mongodb+srv://harshithm2508:harshith25@paytm-clone.ldrrw17.mongodb.net/UserData?retryWrites=true&w=majority')
.then(()=>{
    console.log("Successfully connected to the databse.")
}).catch((err)=>{
    console.log("There was an error in connecting to the databse : "+err)
})


//  Schema of the database
const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
        minLength : 3,
        maxLength : 30
    },
    password : {
        type : String,
        required : true,
        minLength : 8,
        maxLength : 25
    },
    firstName : {
        type : String,
        required : true,
        trim : true,
        minLength : 1,
        maxLength : 50
    },
    lastName : {
        type : String,
        required : true,
        trim : true,
        minLength : 1,
        maxLength : 25
    }
})


//  Defingin the model
const UserModel = mongoose.model('users',UserSchema)



//  Account related details

const accountSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User"
    },

    balance : {
        type : Number,
        required : true 
    }
})

const Account = mongoose.model("Account",accountSchema);


module.exports = { UserModel, Account }