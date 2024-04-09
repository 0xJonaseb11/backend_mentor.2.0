const express = require('express');
const app = express();
const connect = require('connect');

const things = require('./things');



app.get('/', (req, res) => {
    res.json({code: 200, message: 'OK - success'});
    res.json({code: 404, message: 'Not Found'});
    res.json({code: 403, message: 'Forbidden'});

});

app.get('/home', (req, res) => {
    // res.send("This is the home page")
    res.send("Hello kevin")
    res.write("This is the body")
    

});


// app.all('/home/room', (req, res, next) => {
//     //middle function
//     next();

// })

app.get('/home/room', (req, res) =>{
    res.send("This is the room")
    // window.location.reload();

//     setTimeout(() => {
//         // window.location.reload()

// })

app.get('/home/room/:id', (req, res) =>{
    res.send("Data on id 123", req.params.id);
});
app.get('/home/room/:id/:name', (req, res) =>{
    res.send("This is the name param", req.params.name);
})

});


app.post('/home-post', (req, res) => {
    res.send("This is the home page - POST is working properly");
});


// Use our  exported  router - things
// app.use('/things', things);


// connect



app.listen(8080,() => {
    console.log('Our app is listening at http://localhost:8080...');

})

app.get('/H', (req, res) => {
    

})

// app.use()


