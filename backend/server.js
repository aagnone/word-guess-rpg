const express = require('express')
const fs = require('fs');
const cors = require('cors')

const port = 5000

const app = express()

app.use(cors())

app.get('/api/solutions5', (req, res) => {
    fs.readFile(__dirname + '/data/solutions5.json', 'utf8', (error, data) => {
        if(error){
           console.log(error);
           return;
        }
        res.send(JSON.parse(data));
   })
})

app.get('/api/viable5', (req, res) => {
    fs.readFile(__dirname + '/data/viable5.json', 'utf8', (error, data) => {
        if(error){
           console.log(error);
           return;
        }
        res.send(JSON.parse(data));
   })
})

app.get('/api/letters', (req, res) => {
    fs.readFile(__dirname + '/data/letters.json', 'utf8', (error, data) => {
        if(error){
           console.log(error);
           return;
        }
        res.send(JSON.parse(data));
   })
})

app.listen(port, () => console.log(`Server started on port ${port}`))