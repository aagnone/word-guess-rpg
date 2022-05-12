const express = require('express')
const fs = require('fs');
const cors = require('cors')
const passport = require('passport')
const cookieSession = require('cookie-session')
require('./passport');

const port = 5000

const app = express()

app.use(cors())

//Configure Session Storage
app.use(cookieSession({
   name: 'session-name',
   keys: ['key1', 'key2']
}))

// Middleware - Check user is Logged in
const checkUserLoggedIn = (req, res, next) => {
   req.user ? next() : res.sendStatus(401);
}

//Protected Route.
app.get('/profile', checkUserLoggedIn, (req, res) => {
   res.send(`<h1>${req.user.displayName}'s Profile Page</h1>`)
})

// Auth Routes
app.get('/auth/google', passport.authenticate('google', {
   scope: ['profile', 'email']
}))

app.get('/auth/google/callback', passport.authenticate('google', {
      failureRedirect: '/failed'
   }),
   function (req, res) {
      res.redirect('http://localhost:3000');
   }
)

//Logout
app.get('/logout', (req, res) => {
   req.session = null;
   req.logout();
   res.redirect('/');
})

app.get('/api/solutions5', (req, res) => {
   fs.readFile(__dirname + '/data/solutions5.json', 'utf8', (error, data) => {
      if (error) {
         console.log(error);
         return;
      }
      res.send(JSON.parse(data));
   })
})

app.get('/api/viable5', (req, res) => {
   fs.readFile(__dirname + '/data/viable5.json', 'utf8', (error, data) => {
      if (error) {
         console.log(error);
         return;
      }
      res.send(JSON.parse(data));
   })
})

app.get('/api/letters', (req, res) => {
   fs.readFile(__dirname + '/data/letters.json', 'utf8', (error, data) => {
      if (error) {
         console.log(error);
         return;
      }
      res.send(JSON.parse(data));
   })
})

app.listen(port, () => console.log(`Server started on port ${port}`))