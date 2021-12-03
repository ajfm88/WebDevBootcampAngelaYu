const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('<h1>Hello World!</h1>');
});

app.get('/contact', function(req, res) {
    res.send('Contact me at hideokojima@gmail.com');
});

app.get('/about', function(req, res) {
    res.send('Christian, Coder, Language Learner, Fitness Lover');
});

app.get('/hobbies', function(req, res) {
    res.send('Fitness, Languages, Reading');
});

app.listen(3000, function() {
    console.log("Server started on port 3000.");
});