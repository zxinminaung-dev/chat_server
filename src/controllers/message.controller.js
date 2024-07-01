const express = require('express')
const Constant = require('../utils/constant')
const socketService = require('../services/base/socket.service')
const router = express.Router()
router.get('/send', (req,res)=>{
    let message = req.query.message
    socketService.sendMessageToClients(message)
    res.json({success:true}).status(200);
})
module.exports = router;