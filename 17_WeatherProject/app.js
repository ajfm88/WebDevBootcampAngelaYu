const express = require('express');
const { request } = require('http');
const https = require('https');
const app = express();

app.use(express.urlencoded({ extended : true}));
app.use(express.json());

app.get('/', function(req, res) {
    res.sendFile(__dirname +"/index.html")
});

app.post("/", function(req, res){
    const query = req.body.cityName
    const apiKey = 'be8a5896990d0e7c7854cd250d7e988a'
    const unit = 'imperial'
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=' + apiKey + '&units=' + unit;

    https.get(url, function(response) {
        console.log(response.statusCode);

        response.on('data', function(data) {
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.write("<p>The weather is currently " + weatherDescription + "</p> ")
            res.write( "<h1>The temperature in " + query + " is " +  temp + " degrees F.</h1>" )
            res.write("<img src=" + imageURL + ">")
            res.send()
        });
    });
})

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});