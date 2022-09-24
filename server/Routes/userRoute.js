const express = require('express')
const router = express.Router()

// import controller
const importUser  = require('../Controler/usercontroler.js')

// create user
router.post('/signup',importUser.doSignup)


// sign in
router.post('/signin',importUser.doLogin)


// logout
router.post('/logout',importUser.logout)







module.exports = router