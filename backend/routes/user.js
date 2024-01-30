const express = require('express')
const zod = require('zod');
const router = express.Router();
const jwt = require('jsonwebtoken')
const JWT_SECRET = require('../config')
const { UserModel } = require('../database')

const signUpSchema = zod.object({
    username : zod.string().email(),
    password : zod.string(),
    firstName : zod.string(),
    lastName : zod.string()
})

router.post('/signup', async (req,res)=>{
    const body = req.body;
    const {success} = signUpSchema.safeParse(body);;
    if(!success){
        return res.status(411).json({
            message : "There were incorrect inputs."
        })
    }

    const existingUser = await UserModel.findOne({
        username : req.body.username
    })

    if(existingUser){
        return res.status(411).json({
          message : "There was an user with the same username."  
        })
    }


    const addUser = await UserModel.create(body);
    const userId = addUser._id;

    const token = jwt.sign({ userId },JWT_SECRET);

    res.json({
        message : "User is created successfully",
        token : token
    })
})




module.exports={router}