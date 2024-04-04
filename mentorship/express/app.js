const express = require('express');
const app = express();

const port = 8000;

app.get('/', (req, res) => {
    res.json({code: 200, message: 'OK - success'});
    res.json({code: 404, message: 'Not Found'});
    res.json({code: 403, message: 'Forbidden'});

});

app.get('/home', (req, res) => {

});

app.listen(8000, () => {
    console.log('Our app is listening at http://localhost:8000...');

})

// app.use()


