const express = require('express')
const router = express.Router()
const { ensureGuest } = require('../middleware/auth')

// @desc    Test Page
// @route   GET /
router.get('/', ensureGuest, (req, res) => {
  res.send('test page set')
})


module.exports = router