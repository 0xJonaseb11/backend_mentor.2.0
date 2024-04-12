const bodyParser = require('body-parser');
const express = require('express');
const bodyParser = require('bodyParser')

// CREATING apis using nodejs

/////////////////////////////////////////////////////
/////////////// GET api using express ///////////////
/////////////////////////////////////////////////////


let users = [
    {
        id: 1,
        name: "jonas",
        age: 23,
        email: "jonas@gmail.com"
    }
];

// GET /api/users
app.get('/api/users', (req, res) => {
    return res.json(users);
});

////////////////////////////////////////////////
//////////////// POST API using express ////////
///////////////////////////////////////////////

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json);

// GET users api
app.get('/api/users', (req, res) => {
    return res.json(users);
});

// POST user information
app.post('/api/users', (req, res) => {
    var user = req.body.user
    users.push(user);

    return res.send("User has been added successfully");
});


app.listen(8080, () => {
    console.log("Our app server is running no http://localhost:8080");
});

