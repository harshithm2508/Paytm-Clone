const express = require('express');
const { Account } = require('../database');
const router = express.Router();
const { authMiddleware } = require('../authMiddleware');

//  An endpoint for user to get their balance.
router.get('/balance',authMiddleware,async (req,res)=>{
    const account = await Account.findOne({
        userId : req.userId
    });

    req.json({
        balance : account.balance
    })
})