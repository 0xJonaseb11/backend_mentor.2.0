const express = require("express");

const MongoClient = require('mongodb').MongoClient;
const Mongoose = require("mongoose");

MongoClient.connect("mongodb:http://localhost:5000/db_name", (error, db) => {
    if (error) {
        console.log("Database connection failed", error);
    } else {
        console.log("Database connected successfully")
        db.close();
    }
})