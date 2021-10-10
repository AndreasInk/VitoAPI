const express = require('express')
const multer = require('multer')
const fs = require('fs')
const { promisify } = require('util')

const unlinkAsync = promisify(fs.unlink)
const app = express()
const port = process.env.PORT || 8080
//const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, callback) {
      callback(null, file.originalname)
  }
});
var risk = "...";
var data = "...";
var ids = [];
var queue = [];
const upload = multer({ storage: storage })
var ready = "";

app.get('/', function(req, res) {
    res.send("Cool! The server is running!")
})
app.post('/postData', function(req, res) {
    risk = req.query.risk
    res.send(risk)
    // if (printed.includes('ID')) {
        
    // }
    return 'hello'
})

app.get('/getData', function(req, res) {
    data = req.query.data
    res.send(data)
    // if (printed.includes('ID')) {
        
    // }
    return 'hello'
})
app.post('/postRisk', function(req, res) {
    data = req.query.data
    res.send(data)
    // if (printed.includes('ID')) {
        
    // }
    return 'hello'
})

app.get('/getRisk', function(req, res) {
    risk = req.query.risk
    res.send(risk)
    // if (printed.includes('ID')) {
        
    // }
    return 'hello'
})

app.listen(port)
console.log('Server started successfully on port ' + port + "!")