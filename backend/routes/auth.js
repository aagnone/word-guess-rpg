require("dotenv").config();
// eslint-disable-next-line no-unused-vars
const express = require('express')
const router = require('express').Router()
const passport = require('passport')

// @desc    Auth with Google
// @route   GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    async (req, res) => {
        res.cookie('worgpid', req.user.userId)
        res.redirect(process.env.CLIENT_URI)
    } 
)

// @desc    Logout user
// @route   /auth/logout
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect(process.env.CLIENT_URI)
})

module.exports = router