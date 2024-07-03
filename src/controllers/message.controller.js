const express = require('express')
const Constant = require('../utils/constant')
const socketService = require('../services/base/socket.service')
const router = express.Router()
const client = require('../services/common/redis.service')
//sending request message
router.get('/send', (req,res)=>{
    let data ={
        name: req.query.name,
        message:req.query.message,
        time: new Date()
    } 
    console.log(data)
    socketService.sendMessageToClients(data)
    res.json({success:true}).status(200);
   
})
router.get('/send_to_gf', (req,res)=>{
    let data ={
        name: req.query.name,
        message:req.query.message,
        time: new Date()
    } 
    console.log(data)
    socketService.sendMessageToGF(data)
    res.json({success:true}).status(200);
})
module.exports = router;