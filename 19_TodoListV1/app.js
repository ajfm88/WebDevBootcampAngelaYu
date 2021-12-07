const express = require('express');
const app = express();

app.use(express.urlencoded({ extended : true}));
app.use(express.json());

app.get('/', function(req, res){
    var today = new Date();

    if (today.getDay() === 6 || today.getDay() === 0) {
        res.send("Yay, it's the weekend!");
    } else {
        res.send("Boo! I have to work!");
    }
});

app.listen(3000, function(){
    console.log('Server started on port 3000');
});