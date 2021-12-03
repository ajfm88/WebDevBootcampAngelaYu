const express = require('express');
const app = express();

app.use(express.urlencoded({ extended : true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
    var n1 = Number(req.body.n1);
    var n2 = Number(req.body.n2);

    var result =n1 + n2;

    res.send('The result of the calculation is ' + result);
});

app.get('/bmicalculator', function(req, res) {
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post('/bmicalculator', function(req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);

    res.send("Your BMI is " + bmi);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});