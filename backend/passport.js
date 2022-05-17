require("dotenv").config();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose')
const User = require('./models/User')

module.exports = function(passport) {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.CALL_BACK_URI
  },
  async (accessToken, refreshToken, profile, done) => {
      const newUser = {
        userId: profile.id,
        googleId: profile.id,
        displayName: profile.displayName,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        image: profile.photos[0].value,
        userCurrency: 0,
        userEquipment: [],
        solveOne: 0,
        solveTwo: 0,
        solveThree: 0,
        solveFour: 0,
        solveFive: 0,
        solveSix: 0,
        solveFail: 0,
        userSettings: {}
      }

      try {
        let user = await User.findOne({googleId: profile.id})

        if(user) {
          done(null, user)
        } else {
          user = await User.create(newUser)
          done(null, user)
        }
        
      } catch (err) {
        console.log(err)
        done(null, profile)
      }
    }
  ))
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user))
  })
}