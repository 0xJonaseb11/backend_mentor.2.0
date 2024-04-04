const express = require('express');
const app = express();
const connect = require('connect');


app.get('/https://jonas-sebera.vercel.app', (req, res) => {
    res.json({code: 200, message: 'OK - success'});
    res.json({code: 404, message: 'Not Found'});
    res.json({code: 403, message: 'Forbidden'});

});

app.get('/https://jonas-sebera.vercel.app/home', (req, res) => {
    res.send("This is the home page")
    res.write("This is the body")

});

app.get('/https://jonas-sebera.vercel.app/home/room', (req, res) =>{
    
    res.send("This is the room")
    window.location.reload();

    setTimeout(() => {
        window.location.reload()

})

});

// connect



app.listen(8000, () => {
    console.log('Our app is listening at http://localhost:8000...');

})

// app.use()


