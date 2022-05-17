const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    googleId: {
        type: String,
        required: true
    },
    facebookId: {
        type: String,
        required: false
    },
    displayName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    userCurrency: {
        type: Number,
        required: false
    },
    userEquipment: {
        type: [String],
        required: false
    },
    solveOne: {
        type: Number,
        required: false
    },
    solveTwo: {
        type: Number,
        required: false
    },
    solveThree: {
        type: Number,
        required: false
    },
    solveFour: {
        type: Number,
        required: false
    },
    solveFive: {
        type: Number,
        required: false
    },
    solveSix: {
        type: Number,
        required: false
    },
    solveFail: {
        type: Number,
        required: false
    },
    userSettings: {
        type: Object,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema)