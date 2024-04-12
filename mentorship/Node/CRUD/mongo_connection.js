const express = require('express');
const MongoClient = require('mongodb')
const MongoCli = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:8080/db_name', (err, db) => {
    if (err) {
        console.log('Connection failed', err);
    } else {
        console.log('Database connected successfully');
        db.close();
    }
});

// USING CORE NODEJS
// connection using mongoDB
MongoClient.connect('mongodb://localhost:8080/db_name', (err, db) => {
  if (err) {
    console.log("Connection failed", err);
  } else {
    console.log("DB connected succesfully");
  }
})