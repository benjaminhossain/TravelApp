//env
const dotenv = require('dotenv');
dotenv.config();

//Express
const express = require('express')
const app = express()

//Cors
const cors = require('cors');
app.use(cors());

var path = require('path')
const axios = require('axios');

app.use(express.static('dist'))
app.use(express.json())


app.post('/coordinates', function (req, res) {
    let placename = req.body.placename
    let country = req.body.country
    let url = `http://api.geonames.org/searchJSON?name=${placename}&country=${country}&lang=en&orderby=relevance&maxRows=20&username=benjaminhossain`
    
    console.log(url);

    axios.get(url)
    .then(function(response) {
        //handle success 
        console.log(response.data)
        res.send(response.data)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
      })
})

//GET Route
app.get('/', function (req, res){
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

module.exports = app;
