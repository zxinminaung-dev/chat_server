const express = require('express')
const Constant = require('../utils/constant')
const passport = require('passport')
const socketService = require('../services/base/socket.service')
require('../utils/passport.config')(passport)
const router = express.Router()
router.use(passport.initialize())
router.get('/send', (req,res)=>{
    let message = req.query.message
    socketService.sendMessageToClients(message)
    res.json({success:true}).status(200);
})
module.exports = router;