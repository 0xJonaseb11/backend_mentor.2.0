const express = require('express');
const bodyPaser = require('body-parser');
const server = express();

// bod-parser for passing body request
server.use(bodyPaser.json())
server.use(bodyPaser.urlencoded({extended: true}));

// temporary store for `item` in memory
const itemStore = [
    {
        "name": "node",
        "version": "1.0.0",
        "description": "## Getting started",
        "main": "index.js",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1"
        },
        "keywords": [],
        "author": "",
        "license": "ISC"
      }
      
];

// GET all items
server.get('/item', (req, res) => {
    res.send(itemStore);
});

// GET the item with specified id
server.get('/item/:id', (req, res) => {
    res.send(itemStore[req.params.id]);
});

//POST new item
server.post('/item', (req, res) => {
    itemStore.push(req.body);
    res.json(req.body);
});

// PUT edited item in place of item with specified id
server.put('/item/:id', (req,res) => {
    itemStore[req.params.id] = req.body;
    res.json(req.body);
});

// Delete item with specified id
server.delete('/item/:id', (req, res) => {
    itemStore.splice(req.params.id, 1);
    res.send(req.body);
});

// START  Server
server.listen(8000, () => {
    console.log(`Our server is runnng on http://localhost:${process.env.PORT || 8000}`);
})