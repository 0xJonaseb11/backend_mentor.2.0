const express = require('express');
const route = express.Router();

route.get('/',(req,res) =>{
    res.send('/ being hit')
});
route.get('/example',(req,res) =>{
    res.send('/ being hit also')
});
//our middleware function that we want to execute
route.use((req,res,next) =>{
    console.log('Middleware being used');
    next();
})
//We need to expose this route by exporting it so that our express.js file can access it
module.exports = route;
 