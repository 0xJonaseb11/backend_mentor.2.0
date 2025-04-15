const express = require('express');
const rest = express();

let users = [{
    id : 1,
    name : "kevin",
    age : 30,
    email : "kevin@example.com",
}];

// middle ware to handle post 
rest.use(bodyParser.urlencoded({extended : false}));
rest.use(bodyParser.json);

rest.get('/api/users', (req, res) => {
    return res.json(users);
});

// post and add new user
rest.post('/api/users', (req, res) => {
    var user = req.body.user;
    users.push(user);

    return res.send("Successfully added new user");
});




const bodyParser = require("body-parser");







rest.listen(4000, () => {
    console.log("Server running at http://localhost:4000");
});
