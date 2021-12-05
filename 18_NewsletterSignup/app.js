const express = require('express')
const https = require('https')
const port = 3000

const app = express()

app.use(express.static('public'));
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended : true})); //Parse URL-encoded bodies

app.get('/', function(req,res) {
    res.sendFile(__dirname + '/signup.html');
})

app.post('/', function(req, res) {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status : 'subscribed',
                merge_field: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = 'https://us20.api.mailchimp.com/3.0/lists/4131eac58a'

    const options = {
        method: 'POST',
        auth: 'ajfoucault:41ef636213a5679876fc5d200abd9928-us20'
    }

    const request = https.request(url, options, function(response) {
        response.on('data', function(data) {
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();

});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
})

//API Key
//41ef636213a5679876fc5d200abd9928-us20

//List Id
//4131eac58a