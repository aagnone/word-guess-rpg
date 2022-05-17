const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path');
// const fetch = require('node-fetch');
// const seedrandom = require('seedrandom')
// const deepai = require('deepai')
// deepai.setApiKey('ef69d868-3254-4050-b03f-b952ee87a5ce')


// @desc    GET all 5 letter solutions
// @route   /api/solutions5
router.get('/solutions5', (req, res) => {
    fs.readFile(path.join(__dirname, '..', 'data', 'solutions5.json'), 'utf8', (error, data) => {
       if (error) {
          console.log(error);
          return;
       }
       res.send(JSON.parse(data));
    })
})
 
// @desc    GET a fake user for testing
// @route   /api/getuser
router.get('/getuser', (req, res) => {
    fs.readFile(path.join(__dirname, '..', 'data', 'fakeuser.json'), 'utf8', (error, data) => {
       if (error) {
          console.log(error);
          return;
       }
       res.send(JSON.parse(data));
    })
})

// @desc    All viable allowed guesses for 5 letter words
// @route   /api/viable5
router.get('/viable5', (req, res) => {
    fs.readFile(path.join(__dirname, '..', 'data', 'viable5.json'), 'utf8', (error, data) => {
       if (error) {
          console.log(error);
          return;
       }
       res.send(JSON.parse(data));
    })
})

// @desc    GET all keyboard letters
// @route   /api/letters
router.get('/letters', (req, res) => {
    fs.readFile(path.join(__dirname, '..', 'data', 'letters.json'), 'utf8', (error, data) => {
       if (error) {
          console.log(error);
          return;
       }
       res.send(JSON.parse(data));
    })
})

// router.get('/getrandom', (req, res) => {
//    const randGeneratorFrom = (seed, from, to) => {
//       const generator = seedrandom(seed)
//       return Math.floor(from + generator() * (to - from))
//     }
    
//     const now = new Date()
//     const seed = now.toDateString().split(' ').join('')
//     const month = randGeneratorFrom(seed, 1, 12)
//     const year = randGeneratorFrom(seed, 2008, 2022)
//     const day = randGeneratorFrom(seed, 1, 28)
    
//    fetch(`https://gnews.io/api/v4/top-headlines?token=ff87ff7dc2628c92969948b4e786af73&max=1&from=${year}-${month}-${day}&to=${year}-${month}-${day}&lang=en`)
//       .then(res => res.json())
//       .then(async json => {
//          const removeLineBreaks = json.articles[0].content.replace(/(\r\n|\n|\r)/gm, "")
//          const newString = removeLineBreaks.split('...')
//          let thing = ''
//          try {
//             thing = await deepai.callStandardApi("text-generator", {
//                text: newString[0],
//             })
//             res.send(thing.output)
//          } catch(e) {
//             console.log(e)
//          }
//       })
// })

module.exports = router