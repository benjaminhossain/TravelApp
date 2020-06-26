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
        console.log(response.data)
        res.send(response.data)
    })
    .catch(function (error) {
        console.log(error);
      })
})

app.post('/weather', function (req, res) {
    let lat = req.body.lat
    let lng = req.body.lng
    let url = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lng}&days=1&units=I&key=fcb6b5ce0e174e48af75ad37341acbff`
    axios.get(url)
    .then(function(response) {
        res.send(response.data)
    })
    .catch(function (error) {
        console.log(error);
      })
  })

app.post('/image', function (req, res) {
    let city = req.body.city
    //let country = req.body.country
    let url = `https://pixabay.com/api/?key=17226527-53a81ada824d8e46fd8fae5ba&q=${city}&image_type=photo&category=travel&safesearch=true`
    axios.get(url)
    .then(function(response) {
        res.send(response.data)
    })
    .catch(function (error) {
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
