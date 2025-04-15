const express = require("express")
const bodyParser = require("body-parser");
const server = express();

// bodyParser for parding json date request
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended : false}));

// Temporary store item
let items = [
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

// GET all items - READ
server.get('/item', (req, res) => {
    return res.json(items);
})

// GET item with specified id
server.get('/item:id', (req, res) => {
    return res.json(items[req.params.id])
});

// POST a new item - CREATE
server.post('/item/:id', (req, res) => {
    items.push(req.body);
    return res.json(req.body)
})

// PUT edited items in place of specified id - UPDATE
server.put('/item/:id', (req, res) => {
    items[req.params.id] = req.body;
    return res.json(req.body);
})

// DELETE items with specified id
server.delete('/items/:id', (req, res) => {
    items.splice(req.params.id, 2);
    return res.json(req.body);
});

server.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
})
