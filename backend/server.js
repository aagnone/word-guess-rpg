const express = require('express')
const cors = require('cors')
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
require('./passport')(passport)
const connectDB = require('./db')

connectDB()

const port = 5000

const app = express()

app.use(cors({
   origin: "http://localhost:3000",
   methods: "GET, POST, PUT, DELETE",
   credentials: true
}))

app.use(require('body-parser').json())


// Sessions
app.use(
   session({
     secret: 'keyboard cat',
     resave: false,
     saveUninitialized: false,
     store: MongoStore.create({mongoUrl: process.env.MONGO_URI,}),
   })
)
 
 // Passport middleware
app.use(passport.initialize())
app.use(passport.session())
 
// Set global var
app.use(function (req, res, next) {
   res.locals.user = req.user || null
   next()
})

app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))
app.use('/user', require('./routes/user'))
app.use('/api', require('./routes/api'))


app.listen(port, () => console.log(`Server started on port ${port}`))