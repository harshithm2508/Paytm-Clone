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


// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
	User,
    Account
};