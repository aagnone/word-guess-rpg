const express = require('express')
const router = express.Router()

const User = require('../models/User')

router.get('/getall', async (req, res) => {
    try {
        const user = await User.find()
        res.send(user)
    } catch (err) {
        console.log(err)
    }
})

router.post('/getcurrent', async (req, res) => {
    try {
        const user = await User.findOne({userId: '114137942818706516012'})
        res.json(user)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router