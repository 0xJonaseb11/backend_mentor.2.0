// simple connect using promises
const MongoDB = require("mongodb");
const MongoClient = require(mongodb).MongoClient;

MongoDB.connect("mongodb:http://localhost:5000/db_name")
.then((database) => {
    const collection = database.collection("collection_name");
    return collection.insert({key: 'value'});
})
.then((result) => {
    console.log(result);
})

// Connect to MongoDB, print 'Connected!' and close the connection.

let url = 'http://localhost:5000/db_name';
MongoClient.connect(ur, (err, db) => {
    if (err) throw new Error("Error while connecting to MongoDB");
    console.log("Connected to database succesfully");
    db.close();
});

